import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuModule } from "@ui/menu/menu.module";
import { RouteReuseStrategy } from "@angular/router";
import { CacheRouteReuseStrategy } from "./cache-route-reuse.strategy";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CacheRouteReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
