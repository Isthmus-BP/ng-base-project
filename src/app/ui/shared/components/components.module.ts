import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtomComponent } from "./buttom/buttom.component";
import { MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [ButtomComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [ButtomComponent]
})
export class ComponentsModule {}
