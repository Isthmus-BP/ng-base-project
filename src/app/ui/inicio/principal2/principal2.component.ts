import { Component, OnInit, ViewChild } from "@angular/core";
import { SwiperDirective } from "ngx-swiper-wrapper";

@Component({
  selector: "app-principal2",
  templateUrl: "./principal2.component.html",
  styleUrls: ["./principal2.component.scss"]
})
export class Principal2Component implements OnInit {
  public animationClass = "";
  @ViewChild(SwiperDirective, { static: false }) cardSwiper: SwiperDirective;
  config: any = {
    init: false,
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 5,
    centeredSlides: true,
    observer: false,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: true,
    watchOverflow: true,
    initialSlide: 0,
    slideActiveClass: "card-active",
    simulateTouch: true
  };
  cardsList = [
    {
      expDate: "10/22",
      noCard: "****-****-9876",
      imgSrc: "/assets/tarjeta-premia-travel.png",
      personTypes: [
        {
          name: "Titular",
          totalUSD: 1000,
          totalUSDFloating: 300,
          totalUSDAvaliable: 600,
          totalCRC: 450000,
          totalCRCFloating: 145000,
          totalCRCAvaliable: 305000
        }
      ]
    },
    {
      expDate: "10/21",
      noCard: "****-****-1233",
      imgSrc: "/assets/premia-visa-gold.png",
      personTypes: [
        {
          name: "Titular",
          totalUSD: 1000,
          totalUSDFloating: 370,
          totalUSDAvaliable: 560,
          totalCRC: 450000,
          totalCRCFloating: 145000,
          totalCRCAvaliable: 305000
        },
        {
          name: "Adicional 1",
          totalUSD: 1000,
          totalUSDFloating: 543,
          totalUSDAvaliable: 800,
          totalCRC: 450000,
          totalCRCFloating: 145000,
          totalCRCAvaliable: 305000
        }
      ]
    }
  ];
  private actualIndex = 0;

  constructor() {}

  public onCardChange(event) {
    this.actualIndex = event;
  }

  ngOnInit() {
    setTimeout(() => {
      this.cardSwiper.init();
    }, 200);
  }
}
