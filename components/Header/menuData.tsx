import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Platform",
    path: "/#",
    newTab: false,
  },
  {
    id: 4,
    title: "Industries",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Page 1",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Page 2",
        path: "/contact",
        newTab: false,
      }
    ],
  },

  {
    id: 3,
    title: "Resources",
    path: "/#",
    newTab: false,
  },
  {
    id: 33,
    title: "About Us",
    path: "/#",
    newTab: false,
  },

];
export default menuData;
