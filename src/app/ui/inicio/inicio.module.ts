import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InicioRoutingModule } from "./inicio-routing.module";
import { InicioComponent } from "./inicio.component";
import { InicioSharedModule } from "./inicio-shared.module";

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, InicioRoutingModule, InicioSharedModule]
})
export class InicioModule {}
