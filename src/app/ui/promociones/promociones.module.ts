import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PromocionesRoutingModule } from "./promociones-routing.module";
import { PromocionesComponent } from "./promociones.component";
import { PromocionesSharedModule } from "./promociones-shared.module";

@NgModule({
  declarations: [PromocionesComponent],
  imports: [CommonModule, PromocionesRoutingModule, PromocionesSharedModule]
})
export class PromocionesModule {}
