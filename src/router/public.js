import { LoginPage, RegisterPage } from "@bb-backend/pages";

export const routePublic = [
    {
        exact: true,
        path: "/login",
        component: LoginPage
    },
    {
        exact: true,
        path: "/register",
        component: RegisterPage
    }
]