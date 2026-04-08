import { useMemo, useState } from 'react';
import { readProgressState, recordQuizAttempt } from '../../lib/progress-state';

type GuidedStep = {
  title: string;
  detail: string;
};

type GuidedSolutionProps = {
  id: string;
  title: string;
  prompt: string;
  hints: string[];
  steps: GuidedStep[];
  points?: number;
};

export default function GuidedSolution({
  id,
  title,
  prompt,
  hints,
  steps,
  points = 8,
}: GuidedSolutionProps) {
  const existing = useMemo(() => readProgressState().quizzes[id], [id]);
  const [visibleHints, setVisibleHints] = useState(existing?.correct ? hints.length : 0);
  const [visibleSteps, setVisibleSteps] = useState(existing?.correct ? steps.length : 0);

  const solved = existing?.correct || visibleSteps >= steps.length;

  function handleMarkSolved() {
    recordQuizAttempt(id, true, points);
  }

  return (
    <section className="guided-solution">
      <p className="quiz-label">Guided practice</p>
      <h2>{title}</h2>
      <p>{prompt}</p>

      <div className="guided-actions">
        {visibleHints < hints.length && (
          <button
            type="button"
            className="secondary-button"
            onClick={() => setVisibleHints((current) => current + 1)}
          >
            Reveal hint
          </button>
        )}

        {visibleSteps < steps.length && (
          <button
            type="button"
            className="secondary-button"
            onClick={() => setVisibleSteps((current) => current + 1)}
          >
            Reveal next solution step
          </button>
        )}
      </div>

      {visibleHints > 0 && (
        <div className="hint-stack">
          {hints.slice(0, visibleHints).map((hint) => (
            <p key={hint} className="hint-chip">
              {hint}
            </p>
          ))}
        </div>
      )}

      {visibleSteps > 0 && (
        <ol className="guided-step-list">
          {steps.slice(0, visibleSteps).map((step) => (
            <li key={step.title} className="guided-step">
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
      )}

      {solved && (
        <div className="quiz-feedback success">
          <p>Full reasoning path revealed. Mark this as understood to lock study points.</p>
          <button type="button" className="primary-link" onClick={handleMarkSolved}>
            Mark as understood (+{points})
          </button>
        </div>
      )}
    </section>
  );
}

