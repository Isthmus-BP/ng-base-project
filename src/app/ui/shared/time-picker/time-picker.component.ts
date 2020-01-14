import { Component } from "@angular/core";

@Component({
  selector: "ngx-time-picker",
  templateUrl: "time-picker.component.html",
  styleUrls: ["time-picker.component.scss"]
})
export class TimePickerComponent {
  public Array = Array;
  config: any = {
    init: true,
    direction: "vertical",
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
    observer: false,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    watchOverflow: true,
    initialSlide: 0,
    slideActiveClass: "card-active",
    simulateTouch: true
  };

}
