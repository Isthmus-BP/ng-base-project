import { Component, NgZone, ViewChild } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Location } from "@angular/common";
import { MatSidenav } from "@angular/material";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private zone: NgZone,
    private location: Location
  ) {}

  //called when the menu opens or close
  // onOpenedChange(isOpened: boolean) {
  //   if (!isOpened) {
  //     alert("test");
  //     window.removeEventListener("popstate", this.onHardwareBackButton);
  //   }
  //   this.zone.runOutsideAngular(() => {
  //     if (isOpened) {
  //       window.addEventListener("popstate", this.onHardwareBackButton, {
  //         passive: true
  //       });
  //       this.location.go("side-nav");
  //     } else {
  //     }
  //   });
  // }
  //called when back button is pressed
  private onHardwareBackButton = () => {
    this.sidenav.close();
    window.removeEventListener("popstate", this.onHardwareBackButton);
  };
}
