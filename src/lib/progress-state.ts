export type QuizRecord = {
  correct: boolean;
  attempts: number;
  points: number;
};

export type ProgressState = {
  version: 1;
  completedLectures: string[];
  quizzes: Record<string, QuizRecord>;
  updatedAt: string;
};

export const STORAGE_KEY = 'economic-policy-progress:v1';
export const PROGRESS_EVENT = 'economic-policy-progress-updated';

function defaultState(): ProgressState {
  return {
    version: 1,
    completedLectures: [],
    quizzes: {},
    updatedAt: new Date().toISOString(),
  };
}

export function readProgressState(): ProgressState {
  if (typeof window === 'undefined') {
    return defaultState();
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return defaultState();
  }

  try {
    const parsed = JSON.parse(raw) as ProgressState;

    return {
      ...defaultState(),
      ...parsed,
      completedLectures: parsed.completedLectures ?? [],
      quizzes: parsed.quizzes ?? {},
    };
  } catch {
    return defaultState();
  }
}

export function writeProgressState(state: ProgressState) {
  if (typeof window === 'undefined') {
    return;
  }

  const nextState = {
    ...state,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  window.dispatchEvent(new CustomEvent(PROGRESS_EVENT));
}

export function toggleLecture(slug: string) {
  const current = readProgressState();
  const isCompleted = current.completedLectures.includes(slug);
  const completedLectures = isCompleted
    ? current.completedLectures.filter((item) => item !== slug)
    : [...current.completedLectures, slug];

  writeProgressState({
    ...current,
    completedLectures,
  });
}

export function recordQuizAttempt(id: string, correct: boolean, points: number) {
  const current = readProgressState();
  const previous = current.quizzes[id];

  const nextRecord: QuizRecord = {
    correct,
    attempts: (previous?.attempts ?? 0) + 1,
    points: correct ? Math.max(previous?.points ?? 0, points) : previous?.points ?? 0,
  };

  writeProgressState({
    ...current,
    quizzes: {
      ...current.quizzes,
      [id]: nextRecord,
    },
  });
}

export function resetProgress() {
  writeProgressState(defaultState());
}

export function totalQuizPoints(state: ProgressState) {
  return Object.values(state.quizzes).reduce((sum, quiz) => sum + quiz.points, 0);
}

