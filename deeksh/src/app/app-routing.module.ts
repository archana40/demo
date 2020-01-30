import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ReachusComponent } from './reachus/reachus.component';
import { ChartComponent } from './home/charts/chart/chart.component';
import { BillableTableComponent } from './billable-table/billable-table.component';
import { RevenueComponent } from './revenue/revenue.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientdataComponent } from './clientdata/clientdata.component';


const routes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'client' , component : ClientComponent},
  { path : 'reachUs' , component : ReachusComponent},
  { path : 'chart' , component : ChartComponent},
  { path : 'table' , component : BillableTableComponent},
  { path : 'revenue' , component : RevenueComponent},
  { path : 'clients' , component : ClientsComponent},
  { path : 'clientsdata' , component : ClientdataComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
