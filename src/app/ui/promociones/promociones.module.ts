import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PromocionesRoutingModule } from "./promociones-routing.module";
import { PromocionesComponent } from "./promociones.component";
import {
  ContentModule,
  SideContentModule,
  FooterModule,
  ButtonModule,
  HeaderModule
} from "@ui/shared";

@NgModule({
  declarations: [PromocionesComponent],
  imports: [
    CommonModule,
    PromocionesRoutingModule,
    //#region Shared
    ContentModule,
    SideContentModule,
    FooterModule,
    ButtonModule,
    HeaderModule
    //#endregion Shared
  ]
})
export class PromocionesModule {}
