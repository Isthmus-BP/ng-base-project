import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent, EmptyComponent } from "@ui/menu";
import { MenuGuard } from "@ui/guards";

export const routes: Routes = [
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
        loadChildren: "@ui/inicio/inicio.module#InicioModule"
      },
      {
        path: "promociones",
        loadChildren: "@ui/promociones/promociones.module#PromocionesModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
