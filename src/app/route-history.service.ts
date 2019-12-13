import {Injectable} from '@angular/core';
import {NavigationStart, Router, RoutesRecognized} from '@angular/router';

@Injectable({providedIn: 'root'})
export class RouteHistoryService {
  private history: string[] = [];
  private tempCallBack: any;

  constructor(private router: Router) {
  }

  public init(): void {
    this.router.events.subscribe(next => {
      if (next instanceof NavigationStart) {
        const routerEvent = next as NavigationStart;
        if (routerEvent.navigationTrigger === 'imperative') {
          this.tempCallBack = (urlNext) => this.history.push(urlNext);
        }
      } else if (next instanceof RoutesRecognized) {
        if (!!this.tempCallBack) {
          const baseUrl = window.location.origin;
          const url = `${baseUrl}${next.url}`;
          this.tempCallBack(url);
          this.tempCallBack = undefined;
        }
      }
    });
  }

  public isRouteTop(): boolean {
    const actualURL = window.location.href;
    return actualURL === this.history[this.history.length - 1];
  }

  public getHistoryPosition(url: string): number {
    return this.history.findIndex((value) => value === url);
  }

  public onDestroy(): void {
    this.history = undefined;
    this.tempCallBack = undefined;
  }
}
