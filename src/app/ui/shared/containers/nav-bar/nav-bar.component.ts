import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {MatToolbar} from '@angular/material';

/**
 * NavBar for Desktop and mobile environments, management position and redirection to profile
 * route
 */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  @ViewChild(MatToolbar, {static: false}) matToolbar: MatToolbar;
  public activeSticky = false;

  /**
   * Check if is mobile or desktop device
   */
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router: Router,
              private breakpointObserver: BreakpointObserver,
              public elementHTML: ElementRef,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    window.addEventListener('scroll', () => this.validatePositionNavBar(), true);
  }

  /**
   * Redirect to routes of desktop menu
   */
  goOutlet() {
    this.router.navigate(['./', {outlets: {menuoutlet: 'menu'}}], {
      relativeTo: this.route
    });
  }

  /**
   * Fires on profile chip is clicked on desktop devices
   */
  onClickToChip() {
    console.log('goToProfile');
  }

  ngOnDestroy(): void {
  }

  /**
   * Check and active or disable class to set position fixed and
   * generate sticky effect
   */
  validatePositionNavBar() {
    const navPosition = this.matToolbar._elementRef.nativeElement.offsetTop + 1;
    this.activeSticky = window.pageYOffset >= navPosition;
  }
}
