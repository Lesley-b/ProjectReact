import { Login, Signup } from "../../pages";
import { Routes } from "../enums/Routes.enum";
import { IRoute } from "../models/IRoute.model";

const ROUTES: Array<IRoute> = [
  {
    name: Routes.LOGIN,
    path: "/login",
    component: <Login />,
    requiresAuth: false
  },
  {
    name: Routes.SIGNUP,
    path: "/signup",
    component: <Signup />,
    requiresAuth: false
  },
];

export { ROUTES }