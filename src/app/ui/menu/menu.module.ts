import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu.component";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { EmptyComponent } from "@ui/menu/empty/empty.component";
import { MenuRoutingModule } from "./menu-routing.module";

@NgModule({
  declarations: [MenuComponent, EmptyComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    RouterModule,
    //#region Material
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
    //#endregion Material
  ],
  exports: [MenuComponent, EmptyComponent]
})
export class MenuModule {}
