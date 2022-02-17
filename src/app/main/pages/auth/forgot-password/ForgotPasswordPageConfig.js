import { lazy } from "react";

const ForgotPasswordPage = lazy(() => import("./ForgotPasswordPage"));

const ForgotPasswordPageConfig = {
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
  // auth: authRoles.onlyGuest,
  routes: [
    {
      path: "pages/auth/forgot-password",
      element: <ForgotPasswordPage />,
    },
  ],
};

export default ForgotPasswordPageConfig;
