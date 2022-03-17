import Login from "pages/Login";

// List of Routes name using for links and route
export const appRoutes = Object.freeze({
  ROUTE_FORGOT_PASSWORD: "/forgot-password",
  ROUTE_LOGIN: "/login",
  ROUTE_SIGNUP: "/signup",
});

// List of route object which will be rendered under Router component
export default Object.freeze([
  { path: authRoutes.ROUTE_FORGOT_PASSWORD, component: Login },
  { path: authRoutes.ROUTE_LOGIN, component: Login },
  { path: authRoutes.ROUTE_SIGNUP, component: Login },
]);
