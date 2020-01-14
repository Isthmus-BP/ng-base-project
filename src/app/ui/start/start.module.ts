import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StartRoutingModule } from "./start-routing.module";
import { StartComponent } from "./start.component";
import { LoginComponent } from "./login/login.component";
import {
  ContentModule,
  SideContentModule,
  FooterModule,
  ButtonModule,
  HeaderModule
} from "../shared";
import { MatModule } from "../mat.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [StartComponent, LoginComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    //#region Shared
    ContentModule,
    SideContentModule,
    FooterModule,
    ButtonModule,
    HeaderModule
    //#endregion Shared
  ]
})
export class StartModule {}
