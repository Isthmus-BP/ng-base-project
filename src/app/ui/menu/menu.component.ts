import {
  AfterContentInit,
  Component,
  ElementRef,
  HostListener,
  NgZone,
  OnInit,
  ViewChild
} from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Location } from "@angular/common";
import { MatSidenav, MatSidenavContent } from "@angular/material";
import {
  ActivatedRoute,
  Router,
  NavigationStart,
  NavigationEnd
} from "@angular/router";
// import { NavBarComponent } from "@ui/shared/containers/nav-bar/nav-bar.component";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;
  // @ViewChild("navBarComponent", { static: false })
  // navBarComponent: NavBarComponent;
  // @ViewChild("styleMarginNav", { static: false }) styleMarginNav: ElementRef;
  // public marginTopPage;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(["(max-width: 767px)"])
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

  goOutlet(fruta?: string) {
    this.router.navigate(["./", { outlets: { menuoutlet: "menu" } }], {
      relativeTo: this.route
    });
  }

  // ngOnInit(): void {}

  goBack() {
    this.location.back();
  }

  irPantalla(route: string) {
    this.goBack();
    setTimeout(() => {
      this.router.navigate([route]);
    }, 100);
  }

  isOnTopPage(): boolean {
    return (
      (window.pageYOffset || document.documentElement.scrollTop) -
        (document.documentElement.clientTop || 0) ===
      0
    );
  }

  // ngAfterContentInit(): void {
  //   setTimeout(() => this.checkNavBarHeight(null));
  // }

  // @HostListener("window:resize", ["$event"])
  // public checkNavBarHeight($event) {
  //   this.marginTopPage = this.navBarComponent.matToolbar._elementRef.nativeElement.offsetHeight;
  //   this.styleMarginNav.nativeElement.innerHTML =
  //     `<style type="text/css"> app-page > div.general-padding { ` +
  //     ` margin-top: ${this.marginTopPage}px;} </style>`;
  //   return (
  //     (window.pageYOffset || document.documentElement.scrollTop) -
  //       (document.documentElement.clientTop || 0) ===
  //     0
  //   );
  // }

  private onHardwareBackButton = () => {
    this.sidenav.close();
    window.removeEventListener("popstate", this.onHardwareBackButton);
  };

  @ViewChild(MatSidenavContent, { static: false })
  matSidenavContent: MatSidenavContent;

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  ngOnInit() {
    this.location.subscribe((ev: PopStateEvent) => {
      console.log("ev.url", ev["url"]);
      this.lastPoppedUrl = ev["url"];
    });
    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationStart) {
        if (ev.url != this.lastPoppedUrl)
          this.yScrollStack.push(
            this.matSidenavContent["elementRef"].nativeElement.scrollTop
          );
      } else if (ev instanceof NavigationEnd) {
        if (ev.url == this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          setTimeout(() => {
            this.matSidenavContent["elementRef"].nativeElement.scrollTo(
              0,
              this.yScrollStack.pop()
            );
          });
        } else
          this.matSidenavContent["elementRef"].nativeElement.scrollTo(0, 0);
      }
    });
  }
}
