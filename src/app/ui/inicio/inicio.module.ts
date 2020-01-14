import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InicioRoutingModule } from "./inicio-routing.module";
import { InicioComponent } from "./inicio.component";
import {
  ButtonModule,
  ContentModule,
  SideContentModule,
  FooterModule,
  HeaderModule
} from "@ui/shared";
import { PrincipalComponent } from "./principal/principal.component";
import { Principal2Component } from "./principal2/principal2.component";
import {MatButtonModule, MatDialogModule, MatTabsModule} from '@angular/material';
import { SwiperModule } from "ngx-swiper-wrapper";
import {TimePickerModule} from '@ui/shared/time-picker/time-picker.module';

@NgModule({
  declarations: [InicioComponent, PrincipalComponent, Principal2Component],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SwiperModule,
    //#region Shared
    ContentModule,
    SideContentModule,
    FooterModule,
    ButtonModule,
    HeaderModule,
    TimePickerModule,
    MatDialogModule,
    //#endregion Shared
    //#region Marerial
    MatTabsModule,
    MatButtonModule,
    //#endregion Material
  ]
})
export class InicioModule {}
