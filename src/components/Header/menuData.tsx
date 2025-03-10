import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Beranda",
    path: "/",
    newTab: false,
  },
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
        path: "/donasi",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Detail Blog",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Donasi",
        path: "/donasi-detail",
        newTab: false,
      },
      {
        id: 46,
        title: "Checkout",
        path: "/checkout",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign In",
        path: "/signin",
        newTab: false,
      },
      {
        id: 48,
        title: "Sign Up",
        path: "/signup",
        newTab: false,
      },
      {
        id: 49,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
