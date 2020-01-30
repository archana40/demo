import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as Widgets from "fusioncharts/fusioncharts.widgets";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { DemoMaterialModule } from './detail/materialModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ReachusComponent } from './reachus/reachus.component';
import { ChartComponent } from './home/charts/chart/chart.component';
import { DataComponent } from './data/data.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { StyleComponent } from './style/style.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClientComponent,
    ReachusComponent,
    ChartComponent,
    DataComponent,
    DetailComponent,
    SearchComponent,
    StyleComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HighchartsChartModule,
    FusionChartsModule,
    NgSelectModule,
    NgOptionHighlightModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
