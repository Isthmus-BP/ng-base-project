import {Component, NgZone, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Location} from '@angular/common';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @ViewChild(MatSidenav, {static: false}) sidenav: MatSidenav;

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
  ) {
  }

  isOnTopPage(): boolean {
    return ((window.pageYOffset || document.documentElement.scrollTop)
      - (document.documentElement.clientTop || 0)) === 0;
  }

  private onHardwareBackButton = () => {
    this.sidenav.close();
    window.removeEventListener('popstate', this.onHardwareBackButton);
  };
}
