import { useState } from 'react';
// import AccountTreeIcon from '@material-ui/icons/AccountTree';
// import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
// import HomeIcon from '@material-ui/icons/Home';
// import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CategoryIcon from '@material-ui/icons/Category';
import YouTubeIcon from '@material-ui/icons/YouTube';
// import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ExtensionIcon from '@material-ui/icons/Extension';
// import BurstModeIcon from '@material-ui/icons/BurstMode';
// import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PaymentIcon from '@material-ui/icons/Payment';
import InfoIcon from '@material-ui/icons/Info';

function useListMenu() {
    const [list] = useState([{
        title: "DashBoard",
        path: "/dashboard",
        icon: DashboardIcon,
        submenu: null
    },
    {
        title: "User Allow",
        path: "/allow_user",
        icon: PeopleAltIcon,
        submenu: null
    },
    {
        title: "อนุญาติ Video",
        path: "/allow_video",
        icon: YouTubeIcon,
        submenu: null
    },
    {
        title: "Category Manager",
        path: "/category_manager",
        icon: CategoryIcon,
        submenu: null
    },
    // {
    //     title: "Account",
    //     path: "/admin/account",
    //     icon: AccountTreeIcon,
    //     submenu: [{
    //         title: "Video by Category",
    //         path: "/admin/account/video_by_category",
    //         icon: VideoLibraryIcon,
    //         submenu: null
    //     }]
    // },
    // {
    //     title: "Page Home",
    //     path: "/home",
    //     icon: HomeIcon,
    //     submenu: [{
    //         title: "Banner",
    //         path: "/admin/home/banner",
    //         icon: ViewCarouselIcon,
    //         submenu: null
    //     },
    //     {
    //         title: "Category",
    //         path: "/admin/home/category",
    //         icon: BurstModeIcon,
    //         submenu: null
    //     },
    //     {
    //         title: "Free Video",
    //         path: "/admin/home/free_video",
    //         icon: YouTubeIcon,
    //         submenu: null
    //     }]
    // },
    // {
    //     title: "Category",
    //     path: "/admin/category",
    //     icon: CategoryIcon,
    //     submenu: [{
    //         title: "Main Menu",
    //         path: "/admin/category/main_menu",
    //         icon: MenuOpenIcon,
    //         submenu: null
    //     },
    //     {
    //         title: "(Old) List All Category",
    //         path: "/admin/category/category",
    //         icon: BurstModeIcon,
    //         submenu: null
    //     },
    //     {
    //         title: "List Video in category",
    //         path: "/admin/category/video",
    //         icon: VideoLibraryIcon,
    //         submenu: null
    //     },
    //     {
    //         title: "List ADS in category",
    //         path: "/admin/category/video",
    //         icon: LoyaltyIcon,
    //         submenu: null
    //     },
    //     {
    //         title: "(Test) List Video in category 101",
    //         path: "/admin/category/video",
    //         icon: VideoLibraryIcon,
    //         submenu: null
    //     },
    //     {
    //         title: "(Test) List ADS in category 101",
    //         path: "/admin/category/ads",
    //         icon: LoyaltyIcon,
    //         submenu: null
    //     },
    //     {
    //         title: "(Test) List Video in category 102",
    //         path: "/admin/category/video",
    //         icon: VideoLibraryIcon,
    //         submenu: null
    //     },
    //     {
    //         title: "(Test) List ADS in category 102",
    //         path: "/admin/category/ads",
    //         icon: LoyaltyIcon,
    //         submenu: null
    //     }]
    // },
    {
        title: "Payment",
        path: "/payment",
        icon: PaymentIcon,
        submenu: null
    },
    // {
    //     title: "Home - Main",
    //     path: "/admin/home_main",
    //     icon: HomeIcon,
    //     submenu: [
    //         {
    //             title: "Category Two",
    //             path: "/admin/home_main/category_two",
    //             icon: BurstModeIcon,
    //             submenu: null
    //         }
    //     ]
    // },
    {
        title: "Others",
        path: "/admin/others",
        icon: ExtensionIcon,
        submenu: [
            {
                title: "Term of use",
                path: "/admin/term_of_use",
                icon: InfoIcon,
                submenu: null
            }
        ]
    }]);

    return { list }
}

export default useListMenu;