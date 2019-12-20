import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { Tab1Component } from "./tab1/tab1.component";
import { Tab2Component } from "./tab2/tab2.component";
import { DetailComponent } from "./detail/detail.component";
import { TestDetailComponent } from "./test-detail/test-detail.component";
import { TestListComponent } from "./test-list/test-list.component";
import { MenuGuard } from "@ui/guards";
// import { EmptyComponent } from "@ui/shared/components";

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  {
    path: "main",
    component: HomeComponent,
    children: [
      // {
      //   path: "menu",
      //   component: EmptyComponent,
      //   outlet: "menuoutlet",
      //   canActivate: [MenuGuard]
      // },
      { path: "", redirectTo: "page1", pathMatch: "full" },
      {
        path: "page1",
        component: Page1Component,
        children: [
          { path: "", redirectTo: "tab2", pathMatch: "full" },
          { path: "tab1", component: Tab1Component },
          {
            path: "testlist",
            component: TestListComponent,
            data: { reuse: true }
          },
          {
            path: "tab2",
            component: Tab2Component
          },
          { path: "detail2", component: DetailComponent },
          {
            path: "detail/:fruta",
            component: DetailComponent,
            outlet: "outlet2"
          }
        ]
      },
      {
        path: "page2",
        component: Page2Component
      },
      {
        path: "testlist",
        component: TestListComponent
      },
      {
        path: "testdetail",
        component: TestDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
