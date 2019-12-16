import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test-list",
  templateUrl: "./test-list.component.html",
  styleUrls: ["./test-list.component.scss"]
})
export class TestListComponent implements OnInit {
  public show: boolean = false;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 1000);
  }
}
