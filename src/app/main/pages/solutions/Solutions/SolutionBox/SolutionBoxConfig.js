import { lazy } from 'react';

const SolutionBox = lazy(() => import('./SolutionBox'));

const SolutionBoxConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/solutions/Solutions/SolutionBox',
      element: <SolutionBox />,
    },
  ],
};

export default SolutionBoxConfig;
