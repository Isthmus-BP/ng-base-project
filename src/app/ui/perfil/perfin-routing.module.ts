import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PerfilComponent } from "@ui/perfil/perfil.component";
import { GeneralComponent } from "./general/general.component";

const routes: Routes = [
  {
    path: "",
    component: PerfilComponent,
    children: [{ path: "", component: GeneralComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule {}
