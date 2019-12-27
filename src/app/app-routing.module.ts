import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent, EmptyComponent } from "@ui/menu";
import { MenuGuard } from "@ui/guards";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("@ui/menu/menu.module").then(m => m.MenuModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
