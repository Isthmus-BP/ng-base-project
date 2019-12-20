import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MenuComponent, SideContentComponent} from './containers';
import {RouterModule} from '@angular/router';
import {PageComponent} from './containers/page/page.component';
import {NavBarComponent} from '@ui/shared/containers/nav-bar/nav-bar.component';
import {FooterComponent} from '@ui/shared/containers';
import {ComponentsModule} from '@ui/shared/components/components.module';

@NgModule({
  declarations: [
    MenuComponent,
    PageComponent,
    FooterComponent,
    SideContentComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ComponentsModule,
  ],
  exports: [
    MenuComponent,
    PageComponent,
    FooterComponent,
    SideContentComponent,
  ]
})
export class SharedModule {
}
