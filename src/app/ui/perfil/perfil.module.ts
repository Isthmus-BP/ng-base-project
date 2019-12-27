import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfilComponent } from "./perfil.component";
import {
  ContentModule,
  SideContentModule,
  FooterModule,
  ButtonModule,
  HeaderModule
} from "@ui/shared";
import { GeneralComponent } from "./general/general.component";
import { PerfilRoutingModule } from "./perfin-routing.module";

@NgModule({
  declarations: [PerfilComponent, GeneralComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    //#region Shared
    ContentModule,
    SideContentModule,
    FooterModule,
    ButtonModule,
    HeaderModule
    //#endregion Shared
  ]
})
export class PerfilModule {}
