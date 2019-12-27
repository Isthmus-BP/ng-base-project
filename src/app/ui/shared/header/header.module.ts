import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { MatToolbarModule, MatButtonModule } from "@angular/material";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule, RouterModule, MatButtonModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
