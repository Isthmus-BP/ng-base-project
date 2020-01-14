import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimePickerComponent } from "@ui/shared/time-picker/time-picker.component";
import {SwiperModule} from 'ngx-swiper-wrapper';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [TimePickerComponent],
  exports: [TimePickerComponent],
  entryComponents: [TimePickerComponent],
  imports: [CommonModule, SwiperModule, MatButtonModule]
})
export class TimePickerModule {}
