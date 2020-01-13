import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  ActivatedRoute
} from "@angular/router";
import { Observable } from "rxjs";
import { UtilService } from "@app/services";

@Injectable({
  providedIn: "root"
})
export class MenuGuard implements CanActivate {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private util: UtilService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isPageRefresh()) {
      this.router.navigate([this.clearUrl(state.url)]);
      return true;
    } else {
      return true;
    }
  }

  private isPageRefresh(): boolean {
    return !this.router.navigated;
  }

  clearUrl(url: string) {
    return this.util.clearUrl(url);
  }
}
