import { Component, NgZone, ViewChild, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Location } from "@angular/common";
import { MatSidenav } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private zone: NgZone,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  goOutlet(fruta: string) {
    this.router.navigate(["./", { outlets: { menuoutlet: "menu" } }], {
      relativeTo: this.route
    });
  }

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }

  irPantalla(route: string) {
    this.goBack();
    setTimeout(() => {
      this.router.navigate([route]);
    }, 100);
  }
}
