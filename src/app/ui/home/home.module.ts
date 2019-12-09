import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '@ui/shared/shared.module';
import {MatModule} from '@ui/mat.module';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {Tab1Component} from './tab1/tab1.component';
import {Tab2Component} from './tab2/tab2.component';
import {DetailComponent} from './detail/detail.component';
import {MapaComponent} from './mapa/mapa.component';
import {TestListComponent} from './test-list/test-list.component';
import {TestDetailComponent} from './test-detail/test-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    Page1Component,
    Page2Component,
    Tab1Component,
    Tab2Component,
    DetailComponent,
    MapaComponent,
    TestListComponent,
    TestDetailComponent
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, MatModule]
})
export class HomeModule {
}
