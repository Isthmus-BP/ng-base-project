import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  config: any = {
    init: false,
    direction: 'horizontal',
    autoHeight: true,
    centerInsufficientSlides: true,
    slideActiveClass: 'card-active',
  };

  constructor() {
  }

  ngOnInit() {
  }
}
