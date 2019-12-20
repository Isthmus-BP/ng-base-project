import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileChipComponent } from "./profile-chip/profile-chip.component";
import { ButtomComponent } from "@ui/shared/components/buttom/buttom.component";
import { MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [ProfileChipComponent, ButtomComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [ProfileChipComponent, ButtomComponent]
})
export class ComponentsModule {}
