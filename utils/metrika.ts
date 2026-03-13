export type PageType =
  | 'landing'
  | 'uslugi'
  | 'geomarketing'
  | 'cases'
  | 'blog'
  | 'contacts'
  | 'consultations'
  | 'about'
  | 'other';

export type GoalParams = {
  page_type?: PageType;
  page_slug?: string;
  block_id?: string;
  element_id?: string;
  service_id?: string | number;
  case_id?: string | number;
} & Record<string, unknown>;

const METRIKA_ID = 106276548;

export function trackGoal(goalId: string, params?: GoalParams) {
  if (typeof window === 'undefined') return;

  const ymFn = window.ym;
  if (typeof ymFn !== 'function') {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.info('[metrika] ym is not available, skip goal', goalId, params);
    }
    return;
  }

  try {
    ymFn(METRIKA_ID, 'reachGoal', goalId, params);

    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.info('[metrika] reachGoal', goalId, params);
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn('[metrika] reachGoal error', goalId, error);
    }
  }
}

