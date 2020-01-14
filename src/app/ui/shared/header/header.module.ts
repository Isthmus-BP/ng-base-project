import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';
import { RouterModule } from "@angular/router";
import { ProfileChipModule } from "@ui/shared/profile-chip/profile-chip.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    MatIconModule,
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    ProfileChipModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}
