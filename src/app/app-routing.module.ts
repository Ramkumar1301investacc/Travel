import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelHomeComponent } from './pages/travel-home/travel-home.component';


const routes: Routes = [
  {path: '', component:TravelHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
