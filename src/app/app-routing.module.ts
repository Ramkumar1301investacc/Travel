import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelHomeComponent } from './pages/travel-home/travel-home.component';
import { TravelDestinationComponent } from './pages/travel-destination/travel-destination.component';


const routes: Routes = [
  {path: '', component:TravelHomeComponent},
  {path:'travel/destination', component:TravelDestinationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
