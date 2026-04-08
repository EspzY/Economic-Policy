import { useMemo, useState } from 'react';
import { recordQuizAttempt, readProgressState } from '../../lib/progress-state';

type QuizOption = {
  label: string;
  correct: boolean;
  explanation: string;
};

type QuizCardProps = {
  id: string;
  question: string;
  lectureSlug: string;
  kicker?: string;
  hints?: string[];
  points?: number;
  options: QuizOption[];
};

export default function QuizCard({
  id,
  question,
  lectureSlug,
  kicker = 'Checkpoint',
  hints = [],
  points = 5,
  options,
}: QuizCardProps) {
  const storageId = `${lectureSlug}:${id}`;
  const existing = useMemo(() => readProgressState().quizzes[storageId], [storageId]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleHints, setVisibleHints] = useState(existing?.correct ? hints.length : 0);

  const selectedOption = selectedIndex === null ? null : options[selectedIndex];

  function handleSelect(index: number) {
    const option = options[index];
    setSelectedIndex(index);
    recordQuizAttempt(storageId, option.correct, points);
  }

  return (
    <section className="quiz-card">
      <p className="quiz-label">{kicker}</p>
      <h3>{question}</h3>

      <div className="quiz-options">
        {options.map((option, index) => {
          const active = selectedIndex === index;
          const showCorrect = selectedOption && option.correct;
          const className = [
            'quiz-option',
            active ? 'active' : '',
            selectedOption && option.correct ? 'correct' : '',
            active && selectedOption && !option.correct ? 'incorrect' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <button key={option.label} type="button" className={className} onClick={() => handleSelect(index)}>
              <span className="quiz-option-index">{index + 1}</span>
              <span>{option.label}</span>
              {showCorrect && <span className="quiz-mark">Correct answer</span>}
            </button>
          );
        })}
      </div>

      {hints.length > 0 && visibleHints < hints.length && (
        <button
          type="button"
          className="secondary-button"
          onClick={() => setVisibleHints((current) => current + 1)}
        >
          Reveal hint
        </button>
      )}

      {visibleHints > 0 && (
        <div className="hint-stack">
          {hints.slice(0, visibleHints).map((hint) => (
            <p key={hint} className="hint-chip">
              {hint}
            </p>
          ))}
        </div>
      )}

      {selectedOption && (
        <div className={`quiz-feedback ${selectedOption.correct ? 'success' : 'warning'}`}>
          <p>{selectedOption.correct ? `+${points} points recorded.` : 'Not quite. Use the hint and try to justify the distinction.'}</p>
          <p>{selectedOption.explanation}</p>
        </div>
      )}
    </section>
  );
}
