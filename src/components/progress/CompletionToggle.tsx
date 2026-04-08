import { useEffect, useState } from 'react';
import { PROGRESS_EVENT, readProgressState, toggleLecture } from '../../lib/progress-state';

type CompletionToggleProps = {
  slug: string;
};

export default function CompletionToggle({ slug }: CompletionToggleProps) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    function sync() {
      setCompleted(readProgressState().completedLectures.includes(slug));
    }

    sync();
    window.addEventListener(PROGRESS_EVENT, sync as EventListener);

    return () => window.removeEventListener(PROGRESS_EVENT, sync as EventListener);
  }, [slug]);

  return (
    <button
      type="button"
      className={`completion-toggle ${completed ? 'done' : ''}`}
      onClick={() => toggleLecture(slug)}
    >
      {completed ? 'Marked as studied' : 'Mark this lecture as studied'}
    </button>
  );
}

