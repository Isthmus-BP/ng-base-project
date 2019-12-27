import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "@ui/inicio/inicio.component";
import { PrincipalComponent } from "./principal/principal.component";
import { Principal2Component } from "./principal2/principal2.component";

const routes: Routes = [
  {
    path: "",
    component: InicioComponent,
    children: [
      { path: "", component: PrincipalComponent },
      { path: "principal2", component: Principal2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule {}
