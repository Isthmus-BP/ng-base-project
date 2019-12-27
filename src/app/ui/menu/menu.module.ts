import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu.component";
import { MatModule } from "@ui/mat.module";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "@ui/menu/nav-bar/nav-bar.component";
import { ProfileChipComponent } from "@ui/menu/profile-chip/profile-chip.component";
import { EmptyComponent } from "@ui/menu/empty/empty.component";
import { MenuRoutingModule } from "./menu-routing.module";

@NgModule({
  declarations: [
    MenuComponent,
    NavBarComponent,
    ProfileChipComponent,
    EmptyComponent
  ],
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
