import { lazy } from 'react';

const RegisterPage = lazy(() => import('./RegisterPage'));

const RegisterPageConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  routes: [
    {
      path: 'pages/auth/register',
      element: <RegisterPage />,
    },
  ],
};

export default RegisterPageConfig;
