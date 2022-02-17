import { lazy } from 'react';

const OpenApi = lazy(() => import('./OpenApi'));

const OpenApiConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/solutions/Solutions/OpenApi',
      element: <OpenApi />,
    },
  ],
};

export default OpenApiConfig;
