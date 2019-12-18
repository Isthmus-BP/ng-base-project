import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmptyComponent } from "./empty/empty.component";
import { ButtomComponent } from "./buttom/buttom.component";
import { MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [EmptyComponent, ButtomComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [EmptyComponent, ButtomComponent]
})
export class ComponentsModule {}
