import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ReachusComponent } from './reachus/reachus.component';
import { ChartComponent } from './home/charts/chart/chart.component';
import { DataComponent } from './data/data.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'client' , component : ClientComponent},
  { path : 'reachUs' , component : ReachusComponent},
  { path : 'chart' , component : ChartComponent},
  { path : 'data' , component: DataComponent},
  { path : 'detail', component : DetailComponent},
  { path : 'clients' , component : SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
