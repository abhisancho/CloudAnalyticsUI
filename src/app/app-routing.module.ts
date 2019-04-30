import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './shell/dashboard/dashboard.component';
import { TableViewComponent } from './shell/dashboard/table-view/table-view.component';
import { CardConfigComponent } from './shell/dashboard/card-config/card-config.component';

const routes: Routes = [{
  path: "home",
  component: DashboardComponent,
  children: [{
    path: "table",
    component: TableViewComponent
  }, {
    path: "cardconfig/:id",
    component: CardConfigComponent
  }]
}, {
  path:"",
component: DashboardComponent
}, {
  path: "**",
  component: DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
