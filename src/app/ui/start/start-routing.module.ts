import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartComponent } from "./start.component";
import { LoginComponent } from "./login/login.component";
import { CreateUserComponent } from "./create-user/create-user.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "start"
  },
  {
    path: "start",
    component: StartComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "login"
      },
      {
        path: "login",
        component: LoginComponent,
        data: {
          reuse: true
        }
      },
      {
        path: "create-user",
        component: CreateUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule {}
