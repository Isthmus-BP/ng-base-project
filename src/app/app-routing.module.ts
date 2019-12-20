import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from "@ui/menu/menu.component";

export const routes: Routes = [
  {
    path: "",
    component: MenuComponent
    // children: [
    //   {
    //     path: "",
    //     pathMatch: "full",
    //     redirectTo: "dashboard"
    //   },
    //   {
    //     path: "dashboard",
    //     loadChildren: "@ui/dashboard/dashboard.module#DashboardModule"
    //   },
    //   {
    //     path: "proyecto",
    //     loadChildren: "@ui/proyecto/proyecto.module#ProyectoModule"
    //   },
    //   {
    //     path: "propietario",
    //     loadChildren: "@ui/propietario/propietario.module#PropietarioModule"
    //   },
    //   {
    //     path: "transaccion",
    //     loadChildren: "@ui/transaccion/transaccion.module#TransaccionModule"
    //   },
    //   {
    //     path: "actividad",
    //     loadChildren: "@ui/actividad/actividad.module#ActividadModule"
    //   },
    //   {
    //     path: "material",
    //     loadChildren: "@ui/material/material.module#MaterialModule"
    //   }
    // ]
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
