import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SideContentComponent } from "./side-content.component";

@NgModule({
  declarations: [SideContentComponent],
  imports: [CommonModule],
  exports: [SideContentComponent]
})
export class SideContentModule {}
