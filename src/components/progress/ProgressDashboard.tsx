import { useEffect, useMemo, useState } from 'react';
import {
  PROGRESS_EVENT,
  readProgressState,
  resetProgress,
  totalQuizPoints,
} from '../../lib/progress-state';

type LectureSummary = {
  slug: string;
  title: string;
  topic: string;
};

type ProgressDashboardProps = {
  lectures: LectureSummary[];
};

export default function ProgressDashboard({ lectures }: ProgressDashboardProps) {
  const [progress, setProgress] = useState(readProgressState());

  useEffect(() => {
    function sync() {
      setProgress(readProgressState());
    }

    sync();
    window.addEventListener(PROGRESS_EVENT, sync as EventListener);

    return () => window.removeEventListener(PROGRESS_EVENT, sync as EventListener);
  }, []);

  const completedCount = progress.completedLectures.length;
  const percentComplete = lectures.length === 0 ? 0 : Math.round((completedCount / lectures.length) * 100);
  const points = totalQuizPoints(progress) + completedCount * 10;
  const nextLecture = useMemo(
    () => lectures.find((lecture) => !progress.completedLectures.includes(lecture.slug)),
    [lectures, progress.completedLectures],
  );

  return (
    <section className="progress-panel">
      <div className="progress-metrics">
        <article className="card stat-card">
          <p className="stat-value">{completedCount}/{lectures.length}</p>
          <p className="stat-label">Lectures marked as studied</p>
        </article>
        <article className="card stat-card">
          <p className="stat-value">{percentComplete}%</p>
          <p className="stat-label">Syllabus completion</p>
        </article>
        <article className="card stat-card">
          <p className="stat-value">{points}</p>
          <p className="stat-label">Study points earned</p>
        </article>
      </div>

      <div className="card progress-summary">
        <h2>Progress Snapshot</h2>
        <div className="progress-bar">
          <span style={{ width: `${percentComplete}%` }}></span>
        </div>
        <p>
          {nextLecture
            ? `Recommended next step: ${nextLecture.title} on ${nextLecture.topic}.`
            : 'All current lecture modules are marked as studied. Use past exams and formula review for consolidation.'}
        </p>
        <button type="button" className="secondary-button" onClick={() => resetProgress()}>
          Reset local progress
        </button>
      </div>

      <div className="card lecture-checklist">
        <h2>Lecture Checklist</h2>
        <ul>
          {lectures.map((lecture) => {
            const done = progress.completedLectures.includes(lecture.slug);
            return (
              <li key={lecture.slug} className={done ? 'done' : ''}>
                <a href={`/lectures/${lecture.slug}/`}>{lecture.title}</a>
                <span>{lecture.topic}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

