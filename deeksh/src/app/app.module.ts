import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as Widgets from "fusioncharts/fusioncharts.widgets";

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ReachusComponent } from './reachus/reachus.component';
import { ChartComponent } from './home/charts/chart/chart.component';
import { BillableTableComponent } from './billable-table/billable-table.component';
import { RevenueComponent } from './revenue/revenue.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientdataComponent } from './clientdata/clientdata.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClientComponent,
    ReachusComponent,
    ChartComponent,
    BillableTableComponent,
    RevenueComponent,
    ClientsComponent,
    ClientdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FusionChartsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
