import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenuComponent } from "./menu.component";
import { EmptyComponent } from "./empty/empty.component";
import { MenuGuard } from "@ui/guards";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "menu"
  },
  {
    path: "menu",
    component: MenuComponent,
    children: [
      {
        path: "menu",
        component: EmptyComponent,
        outlet: "menuoutlet",
        canActivate: [MenuGuard]
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
      },
      {
        path: "home",
        loadChildren: () =>
          import("@ui/home/home.module").then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
