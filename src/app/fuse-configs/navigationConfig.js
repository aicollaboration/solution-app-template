import i18next from "i18next";
// import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
// import tr from "./navigation-i18n/tr";

i18next.addResourceBundle("en", "navigation", en);

const navigationConfig = [
  {
    id: "applications",
    title: "Applications",
    translate: "APPLICATIONS",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "solutions",
        title: "Solutions",
        type: "collapse",
        icon: "lock",
        children: [
          {
            id: "solutions-component",
            title: "Solutions",
            type: "item",
            url: "pages/solutions/Solutions/Solutions",
          },
          {
            id: "solution-component",
            title: "Solution",
            type: "item",
            url: "pages/solutions/Solutions/Solution",
          },
        ],
      },
    ],
  },
  {
    id: "pages",
    title: "Pages",
    type: "group",
    icon: "pages",
    children: [
      // {
      //   id: "authentication",
      //   title: "Authentication",
      //   type: "collapse",
      //   icon: "lock",
      //   badge: {
      //     title: 10,
      //     bg: "#525E8A",
      //     fg: "#FFFFFF",
      //   },
      //   children: [
      //     {
      //       id: "authentication-register",
      //       title: "Register",
      //       type: "item",
      //       url: "pages/auth/register",
      //     },
      //     {
      //       id: "authentication-reset-password",
      //       title: "Reset Password",
      //       type: "item",
      //       url: "pages/auth/reset-password",
      //     },
      //   ],
      // },
      {
        id: "coming-soon",
        title: "Coming Soon",
        type: "item",
        icon: "alarm",
        url: "pages/coming-soon",
      },
      // {
      //   id: "errors",
      //   title: "Errors",
      //   type: "collapse",
      //   icon: "info",
      //   children: [
      //     {
      //       id: "404",
      //       title: "404",
      //       type: "item",
      //       url: "pages/errors/error-404",
      //     },
      //     {
      //       id: "500",
      //       title: "500",
      //       type: "item",
      //       url: "pages/errors/error-500",
      //     },
      //   ],
      // },
      {
        id: "profile",
        title: "Profile",
        type: "item",
        icon: "person",
        url: "pages/profile",
      },
      {
        id: "faq",
        title: "Faq",
        type: "item",
        icon: "help_outline",
        url: "pages/faq",
      },
    ],
  },
];

export default navigationConfig;
