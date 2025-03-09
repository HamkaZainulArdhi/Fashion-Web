import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Beranda",
    path: "/",
    newTab: false,
  },
  // {
  //   id: 2,
  //   title: "Marketplace",
  //   path: "/about",
  //   newTab: false,
  // },
  {
    id: 2,
    title: "Bootcamp",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "SustainShop",
    path: "/ecommerce",
    newTab: false,
  },
  {
    id: 4,
    title: "Fitur",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "SustainSwap",
        path: "/tukar",
        newTab: false,
      },
      {
        id: 42,
        title: "SustainCare",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
