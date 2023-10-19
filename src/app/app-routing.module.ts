import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelHomeComponent } from './pages/travel-home/travel-home.component';
import { TravelDestinationComponent } from './pages/travel-destination/travel-destination.component';
import { DestinationDateComponent } from './pages/travel-destination/destination-date/destination-date.component';
import { TravellersAgeComponent } from './pages/travel-destination/travellers-age/travellers-age.component';
import { MobileNumComponent } from './pages/travel-destination/mobile-num/mobile-num.component';


const routes: Routes = [
  { path: '', component: TravelHomeComponent },
  {
    path: 'travel-destination', component: TravelDestinationComponent,
    children: [
      {path : "", component: DestinationDateComponent},
      {path : "travellers-age", component: TravellersAgeComponent},
      {path : "travellers-number", component: MobileNumComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
