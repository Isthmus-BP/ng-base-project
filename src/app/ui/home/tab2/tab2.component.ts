import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-tab2",
  templateUrl: "./tab2.component.html",
  styleUrls: ["./tab2.component.scss"]
})
export class Tab2Component implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  goOutlet(fruta: string) {
    this.router.navigate(["./", { outlets: { outlet2: ["detail", fruta] } }], {
      relativeTo: this.route.parent,
      skipLocationChange: true
    });
  }
}
