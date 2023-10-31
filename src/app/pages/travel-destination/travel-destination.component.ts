import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedBadgeDataService } from 'src/app/service/shared-badge-data.service';
SharedBadgeDataService
// import { GetcountriesService } from 'src/app/service/getcountries.service';
// GetcountriesService

@Component({
  selector: 'app-travel-destination',
  templateUrl: './travel-destination.component.html',
  styleUrls: ['./travel-destination.component.css']
})
export class TravelDestinationComponent implements OnInit {

  // constructor(private getCountries : GetcountriesService) {}

  // countryCode : any = [];

  // ngOnInit() {
  //   this.getCountries.getCountriesApi().subscribe((data : any) => {
  //     let allCountriesName = data['data'];
  //     allCountriesName.map((country : any) => {
  //       console.log(country.code)
  //     })
  //   })
  // }

  badges = [];
  badgeImage : string = 'Austria'
  sub: Subscription
  constructor(private sharedBadge: SharedBadgeDataService) { }
 
  ngAfterContentInit() {
    this.sub = this.sharedBadge.send_data.subscribe((data) => {
      this.badges = data;
      console.log(this.badges);

      if(this.badges[0])
      {
        this.badgeImage = this.badges[0]
      }
      console.log(this.badgeImage)
    })
   

  }


  ngOnInit(): void {
   
  }



}
