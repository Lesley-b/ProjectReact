import { ReactNode } from "react";

export interface IRoute {
  name: string;
  path: string;
  component: ReactNode;
  requiresAuth: boolean;
}