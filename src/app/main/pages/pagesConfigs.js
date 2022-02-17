import ForgotPasswordPageConfig from "./auth/forgot-password/ForgotPasswordPageConfig";
import RegisterPageConfig from "./auth/register/RegisterPageConfig";
import ResetPasswordPageConfig from "./auth/reset-password/ResetPasswordPageConfig";
import ComingSoonPageConfig from "./coming-soon/ComingSoonPageConfig";
// import Error404PageConfig from "./errors/404/Error404PageConfig";
// import Error500PageConfig from "./errors/500/Error500PageConfig";
import FaqPageConfig from "./faq/FaqPageConfig";
import ProfilePageConfig from "./profile/ProfilePageConfig";
import OpenApiConfig from "./solutions/Solutions/OpenApi/OpenApiConfig";
import SolutionBoxConfig from "./solutions/Solutions/SolutionBox/SolutionBoxConfig";
import SolutionDetailConfig from "./solutions/Solutions/SolutionDetail/SolutionDetailConfig";
import SolutionsConfig from "./solutions/Solutions/SolutionsConfig";

const pagesConfigs = [
  RegisterPageConfig,
  ResetPasswordPageConfig,
  ForgotPasswordPageConfig,
  ComingSoonPageConfig,
  SolutionsConfig,
  // Error404PageConfig,
  // Error500PageConfig,
  ProfilePageConfig,
  FaqPageConfig,
  OpenApiConfig,
  SolutionBoxConfig,
  SolutionDetailConfig
];

export default pagesConfigs;
