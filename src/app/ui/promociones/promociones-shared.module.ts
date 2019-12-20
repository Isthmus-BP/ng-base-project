import { NgModule } from "@angular/core";
import {
  PageModule,
  SideContentModule,
  FooterModule,
  ButtonModule
} from "@ui/shared";

@NgModule({
  imports: [PageModule, SideContentModule, FooterModule, ButtonModule],
  exports: [PageModule, SideContentModule, FooterModule, ButtonModule]
})
export class PromocionesSharedModule {}
