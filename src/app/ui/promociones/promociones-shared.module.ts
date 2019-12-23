import { NgModule } from "@angular/core";
import {
  PageModule,
  SideContentModule,
  FooterModule,
  ButtonModule
} from "@ui/shared";
import { HeaderModule } from "../shared/header/header.module";

@NgModule({
  imports: [
    PageModule,
    SideContentModule,
    FooterModule,
    ButtonModule,
    HeaderModule
  ],
  exports: [
    PageModule,
    SideContentModule,
    FooterModule,
    ButtonModule,
    HeaderModule
  ]
})
export class PromocionesSharedModule {}
