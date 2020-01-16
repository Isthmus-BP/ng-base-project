import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import {
  ContentModule,
  SideContentModule,
  FooterModule,
  ButtonModule,
  HeaderModule
} from "../shared";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    //#region Shared
    ContentModule,
    SideContentModule,
    FooterModule,
    ButtonModule,
    HeaderModule
    //#endregion Shared
  ]
})
export class HomeModule {}
