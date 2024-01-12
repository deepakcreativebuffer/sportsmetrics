import { lazy } from "react";
import BlankLayout from "../_organism/layouts/BlankLayout";
import PublicLayout from "../_organism/layouts/PublicLayout";
import WithSidebarLayout from "../_organism/layouts/WithSidebarLayout";
import { LayoutItem } from './types';


export const routes:LayoutItem[]= [
  {
    layout: PublicLayout,
    routes: [
      {
        name: "login",
        title: "Login",
        path: "/",
        component: lazy(() => import("../_organism/RegistrationPage")),
      },
      // {
      //   name: "login",
      //   title: "Login",
      //   path: "/",
      //   // component: lazy(() => import("../_organism/WalkThroughPage")),
      // },
      // {
      //   name: "login",
      //   title: "Login",
      //   path: "/login",
      //   component: lazy(() => import("../_organism/Components/Auth/Login")),
      // },
    ]
  },
  {
    layout: WithSidebarLayout,
    routes: [
      {
        layout: BlankLayout,
        name: "super-admin",
        routes: [
          // {
          //   name: "customers",
          //   title: "Customers",
          //   path: "/customers",
          //   component: lazy(() => import("../_organism/Pages/Customers")),
          // },
          // {
          //   name: "features",
          //   title: "Features",
          //   path: "/features",
          //   component: lazy(() => import("../_organism/Pages/Features")),
          // },
       
        ]
      },
    ],
  },

];


