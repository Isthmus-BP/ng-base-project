import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenuComponent } from "./menu.component";
import { EmptyComponent } from "./empty/empty.component";
import { MenuGuard } from "@ui/guards";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "app"
  },
  {
    path: "app",
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
        redirectTo: "inicio"
      },
      {
        path: "inicio",
        loadChildren: () =>
          import("@ui/inicio/inicio.module").then(m => m.InicioModule)
      },
      {
        path: "promociones",
        loadChildren: () =>
          import("@ui/promociones/promociones.module").then(
            m => m.PromocionesModule
          )
      },
      {
        path: "perfil",
        loadChildren: () =>
          import("@ui/perfil/perfil.module").then(m => m.PerfilModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
