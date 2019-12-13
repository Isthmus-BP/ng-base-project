import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';
import {routerHistoryManagement} from '@app/app.component';

export class CacheRouteReuseStrategy implements RouteReuseStrategy {
  private handlers: { [key: string]: DetachedRouteHandle } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return false;
    }
    let shouldReuse = false;
    if (route.routeConfig.data) {
      route.routeConfig.data.reuse ? shouldReuse = true : shouldReuse = false;
    }
    console.log('shouldReuse', shouldReuse);
    return shouldReuse;
  }

  store(route: ActivatedRouteSnapshot, handler: DetachedRouteHandle): void {
    if (handler) {
      this.handlers[this.getUrl(route)] = handler;
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this.handlers[this.getUrl(route)] && !routerHistoryManagement.isRouteTop();
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return null;
    }
    console.log('this.handlers[this.getUrl(route)]', this.handlers[this.getUrl(route)]);
    return this.handlers[this.getUrl(route)];
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    let reUseUrl = false;
    if (future.routeConfig) {
      if (future.routeConfig.data) {
        reUseUrl = future.routeConfig.data.reuse;
      }
    }
    const defaultReuse = (future.routeConfig === current.routeConfig);
    return reUseUrl || defaultReuse;
  }

  getUrl(route: ActivatedRouteSnapshot): string {
    if (route.routeConfig) {
      const url = route.routeConfig.path;
      return url;
    }
  }
}
