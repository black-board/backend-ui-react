import { HomePage, UserAllowPage,PaymentPage, VideoAllowPage,CategoryManagerPage } from "@bb-backend/pages";

export const routePrivate = [
    {
        exact: true,
        path: "/",
        header: "Home",
        component: HomePage
    },
    {
        exact: false,
        path: "/home",
        header: "Home",
        component: HomePage
    },
    {
        exact: false,
        path: "/allow_user",
        header: "User Allow",
        component: UserAllowPage
    },
    {
        exact: false,
        path: "/allow_video",
        header: "Video Allow",
        component: VideoAllowPage
    },
    {
        exact: false,
        path: "/payment",
        header: "",
        component: PaymentPage
    },
    {
        exact: false,
        path: "/category_manager",
        header: "Category Manager",
        component: CategoryManagerPage
    }
]