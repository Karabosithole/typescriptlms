import { Routes } from "@angular/router";
import { Chapter1Component } from "./chapters/chapter1/chapter1.component";
import { Chapter2Component } from "./chapters/chapter2/chapter2.component";
import { Chapter3Component } from "./chapters/chapter3/chapter3.component";
import { LayoutComponent } from "./layout/layout.component";
import { DashboardComponent } from "./layout/dashboard/dashboard.component";
import { BasicsComponent } from "./basics/basics.component";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "basics",
        component: BasicsComponent,
      },
      {
        path: "chapter1",
        component: Chapter1Component,
      },
      {
        path: "chapter2",
        component: Chapter2Component,
      },
      {
        path: "chapter3",
        component: Chapter3Component,
      },
    ],
  },
];
