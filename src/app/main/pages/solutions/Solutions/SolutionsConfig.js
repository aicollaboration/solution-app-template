import { lazy } from 'react';

const Solution = lazy(() => import('./Solution'));
const Solutions = lazy(() => import('./Solutions'));

const SolutionsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/solutions/Solutions/Solution',
      element: <Solution />,
    },
    {
      path: 'pages/solutions/Solutions/Solutions',
      element: <Solutions />,
    },
  ],
};

export default SolutionsConfig;
