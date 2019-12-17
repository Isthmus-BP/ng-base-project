import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MenuComponent } from "./containers";
import { RouterModule } from "@angular/router";
import { PageComponent } from "./containers/page/page.component";
import { FooterComponent } from "./containers/footer/footer.component";
import { SideContentComponent } from "./containers/side-content/side-content.component";

@NgModule({
  declarations: [
    MenuComponent,
    PageComponent,
    FooterComponent,
    SideContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [MenuComponent, PageComponent, FooterComponent, SideContentComponent]
})
export class SharedModule {}
