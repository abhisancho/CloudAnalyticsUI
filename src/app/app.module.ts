import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FundamentalNgxModule } from 'fundamental-ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { DataSourceComponent } from './shell/data-source/data-source.component';
import { DashboardComponent } from './shell/dashboard/dashboard.component';
import { CardConfigComponent } from './shell/dashboard/card-config/card-config.component';
import { CardDisplayComponent } from './shell/dashboard/card-display/card-display.component';
import { TableViewComponent } from './shell/dashboard/table-view/table-view.component';
import { IncludeModule } from './include.module';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    DataSourceComponent,
    DashboardComponent,
    CardConfigComponent,
    CardDisplayComponent,
    TableViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FundamentalNgxModule,
    IncludeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
