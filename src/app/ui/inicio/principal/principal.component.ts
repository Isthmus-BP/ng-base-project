import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-principal",
  templateUrl: "./principal.component.html",
  styleUrls: ["./principal.component.scss"]
})
export class PrincipalComponent implements OnInit {
  show: boolean = false;
  constructor(private elem: ElementRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
      setTimeout(() => {
        // let myswiper = this.elem.nativeElement.querySelector(
        //   ".swiper-container"
        // ).swiper;
        // myswiper.setTranslate(0);
      });
    }, 500);
  }

  config: any = {
    init: true,
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 5,
    centeredSlides: false,
    observer: true,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: true,
    watchOverflow: true,
    initialSlide: 0,
    slideActiveClass: "card-active",
    simulateTouch: true,
    on: {
      slideChange: function() {
        alert("test");
      }
    }
  };

  guardFirst($event) {
    // let myswiper = this.elem.nativeElement.querySelector(".swiper-container")
    //   .swiper;
    // myswiper.setTranslate(0);
    // myswiper.setTransition(500);
  }

  guardLast($event) {
    // let myswiper = this.elem.nativeElement.querySelector(".swiper-container")
    //   .swiper;
    // myswiper.setTranslate(
    //   -myswiper.slidesGrid[myswiper.slidesGrid.length - 1] -
    //     myswiper.slidesGrid[0]
    // );
    // myswiper.setTransition(500);
  }

  next() {
    // this.myswiper.nativeElement.slider.slideNext();

    let myswiper = this.elem.nativeElement.querySelector(".swiper-container")
      .swiper;
    console.log("myswiper", myswiper);
    // myswiper.setTranslate(0);
  }
  // public config: SwiperConfigInterface = {
  //   init: false,
  //   direction: 'horizontal',
  //   slidesPerView: 'auto',
  //   spaceBetween: 5,
  //   centeredSlides: true,
  //   centerInsufficientSlides: true,
  //   observer: false,
  //   keyboard: true,
  //   mousewheel: true,
  //   scrollbar: false,
  //   navigation: true,
  //   pagination: false,
  //   watchOverflow: true,
  //   initialSlide: 0,
  //   breakpointsInverse: true,
  //   preloadImages: true,
  //   updateOnImagesReady: true,
  //   breakpoints: {
  //     450: {
  //       spaceBetween: 1,
  //       centeredSlides: false
  //     }
  //   }
  // };
}
