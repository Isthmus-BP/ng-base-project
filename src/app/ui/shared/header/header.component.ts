import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { navItems } from "@app/ui/menu/_nav";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  public navItems = navItems;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  goOutlet() {
    this.router.navigate(["/app", { outlets: { menuoutlet: "menu" } }]);
  }
}
