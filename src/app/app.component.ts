import {Component, OnDestroy} from '@angular/core';
import {RouteHistoryService} from '@app/route-history.service';

export let routerHistoryManagement;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'base-project';

  constructor(private routeHistoryService: RouteHistoryService) {
    routerHistoryManagement = this.routeHistoryService;
    this.routeHistoryService.init();
  }

  ngOnDestroy(): void {
    this.routeHistoryService.onDestroy();
    routerHistoryManagement = undefined;
  }
}
