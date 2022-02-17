import { lazy } from 'react';

const SolutionDetail = lazy(() => import('./SolutionDetail'));

const SolutionDetailConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/solutions/Solutions/SolutionDetail/:id',
      element: <SolutionDetail />,
    },
  ],
};

export default SolutionDetailConfig;
