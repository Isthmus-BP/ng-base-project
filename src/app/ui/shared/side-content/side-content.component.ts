import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-side-content",
  templateUrl: "./side-content.component.html",
  styleUrls: ["./side-content.component.scss"]
})
export class SideContentComponent implements OnInit {
  @Input() position: "right" | "left" | "all" = "all";
  constructor() {}

  ngOnInit() {}
}
