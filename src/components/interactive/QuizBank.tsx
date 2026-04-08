import { useEffect, useMemo, useState } from 'react';
import type { QuizDifficulty, QuizKind, QuizQuestion } from '../../data/quiz-bank';
import { PROGRESS_EVENT, readProgressState, totalQuizPoints } from '../../lib/progress-state';
import QuizCard from './QuizCard';

type Props = {
  questions: QuizQuestion[];
};

function uniqueSorted<T>(values: T[], compare: (a: T, b: T) => number) {
  return Array.from(new Set(values)).sort(compare);
}

function byString(a: string, b: string) {
  return a.localeCompare(b);
}

export default function QuizBank({ questions }: Props) {
  const [lectureFilter, setLectureFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<QuizDifficulty | 'all'>('all');
  const [kindFilter, setKindFilter] = useState<QuizKind | 'all'>('all');
  const [topicFilter, setTopicFilter] = useState<string>('all');
  const [onlyMissed, setOnlyMissed] = useState(false);
  const [query, setQuery] = useState('');
  const [progress, setProgress] = useState(readProgressState());

  useEffect(() => {
    function sync() {
      setProgress(readProgressState());
    }

    window.addEventListener(PROGRESS_EVENT, sync as EventListener);
    return () => window.removeEventListener(PROGRESS_EVENT, sync as EventListener);
  }, []);

  const lectureOptions = useMemo(() => {
    const pairs = questions
      .map((q) => ({ slug: q.lectureSlug, number: q.lectureNumber, label: `Lecture ${q.lectureNumber}` }))
      .reduce((acc, current) => {
        acc.set(current.slug, current);
        return acc;
      }, new Map<string, { slug: string; number: number; label: string }>());

    return Array.from(pairs.values()).sort((a, b) => a.number - b.number);
  }, [questions]);

  const topicOptions = useMemo(() => uniqueSorted(questions.map((q) => q.topicTag), byString), [questions]);

  const difficultyOptions: QuizDifficulty[] = ['easy', 'medium', 'hard'];
  const kindOptions: QuizKind[] = ['symbols', 'concept', 'math', 'policy', 'truefalse', 'exam'];

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return questions.filter((question) => {
      if (lectureFilter !== 'all' && question.lectureSlug !== lectureFilter) {
        return false;
      }

      if (difficultyFilter !== 'all' && question.difficulty !== difficultyFilter) {
        return false;
      }

      if (kindFilter !== 'all' && question.kind !== kindFilter) {
        return false;
      }

      if (topicFilter !== 'all' && question.topicTag !== topicFilter) {
        return false;
      }

      const storageId = `${question.lectureSlug}:${question.id}`;
      const record = progress.quizzes[storageId];

      if (onlyMissed && record?.correct) {
        return false;
      }

      if (normalizedQuery) {
        const haystack = `${question.question} ${question.lectureTopic} ${question.topicTag}`.toLowerCase();
        if (!haystack.includes(normalizedQuery)) {
          return false;
        }
      }

      return true;
    });
  }, [questions, lectureFilter, difficultyFilter, kindFilter, topicFilter, onlyMissed, query, progress.quizzes]);

  const summary = useMemo(() => {
    const total = filtered.length;
    const mastered = filtered.reduce((count, question) => {
      const storageId = `${question.lectureSlug}:${question.id}`;
      return progress.quizzes[storageId]?.correct ? count + 1 : count;
    }, 0);

    return {
      total,
      mastered,
      points: totalQuizPoints(progress),
    };
  }, [filtered, progress]);

  return (
    <section className="quiz-bank">
      <div className="quiz-bank-summary card">
        <p className="eyebrow">Revision mode</p>
        <h1>Quizzes</h1>
        <p>
          Use this page for active recall across the course. Filter by lecture and question type. Your quiz points are
          stored locally in the browser and feed into the Progress dashboard.
        </p>
        <div className="chip-row">
          <span className="chip">
            Mastered: {summary.mastered}/{summary.total}
          </span>
          <span className="chip">Total quiz points: {summary.points}</span>
        </div>
      </div>

      <div className="quiz-filters card">
        <p className="eyebrow">Filters</p>
        <div className="quiz-filter-grid">
          <label className="quiz-filter">
            <span>Lecture</span>
            <select value={lectureFilter} onChange={(event) => setLectureFilter(event.target.value)}>
              <option value="all">All lectures</option>
              {lectureOptions.map((lecture) => (
                <option key={lecture.slug} value={lecture.slug}>
                  {lecture.label}
                </option>
              ))}
            </select>
          </label>

          <label className="quiz-filter">
            <span>Topic</span>
            <select value={topicFilter} onChange={(event) => setTopicFilter(event.target.value)}>
              <option value="all">All topics</option>
              {topicOptions.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </label>

          <label className="quiz-filter">
            <span>Difficulty</span>
            <select
              value={difficultyFilter}
              onChange={(event) => setDifficultyFilter(event.target.value as QuizDifficulty | 'all')}
            >
              <option value="all">All</option>
              {difficultyOptions.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
          </label>

          <label className="quiz-filter">
            <span>Question type</span>
            <select value={kindFilter} onChange={(event) => setKindFilter(event.target.value as QuizKind | 'all')}>
              <option value="all">All</option>
              {kindOptions.map((kind) => (
                <option key={kind} value={kind}>
                  {kind}
                </option>
              ))}
            </select>
          </label>

          <label className="quiz-filter quiz-filter-wide">
            <span>Search</span>
            <input
              type="search"
              value={query}
              placeholder="Search question text"
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <label className="quiz-filter quiz-filter-inline">
            <span>Show only missed</span>
            <input type="checkbox" checked={onlyMissed} onChange={(event) => setOnlyMissed(event.target.checked)} />
          </label>
        </div>
      </div>

      <div className="quiz-bank-list">
        {filtered.map((question) => (
          <div key={`${question.lectureSlug}:${question.id}`} className="quiz-bank-item">
            <div className="chip-row quiz-bank-meta">
              <span className="chip">Lecture {question.lectureNumber}</span>
              <span className="chip">{question.kind}</span>
              <span className="chip">{question.difficulty}</span>
              <span className="chip">{question.topicTag}</span>
            </div>
            <QuizCard
              id={question.id}
              lectureSlug={question.lectureSlug}
              kicker="Quiz"
              question={question.question}
              hints={question.hints ?? []}
              points={question.points}
              options={question.options}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

