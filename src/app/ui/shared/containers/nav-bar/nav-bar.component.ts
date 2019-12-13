import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router: Router,
              private breakpointObserver: BreakpointObserver,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  goOutlet(fruta?: string) {
    this.router.navigate(['./', {outlets: {menuoutlet: 'menu'}}], {
      relativeTo: this.route
    });
  }
}
