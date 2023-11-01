import { Component } from '@angular/core';
import { GetcountriesService } from 'src/app/service/getcountries.service';
SharedBadgeDataService
import { Output, EventEmitter, Input } from '@angular/core';
import { SharedBadgeDataService } from 'src/app/service/shared-badge-data.service';

@Component({
  selector: 'app-destination-date',
  templateUrl: './destination-date.component.html',
  styleUrls: ['./destination-date.component.css']
})
export class DestinationDateComponent {

  constructor(private getCountries: GetcountriesService, private sharedBadgeService: SharedBadgeDataService) { }

  countries: any = [];                                                     //array to store countries

  searchText: string = '';                                                 //string to store input value

  badgeItems: any = [];                                                    //array to store selected countries badge

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    // console.log(this.searchText)
  }

  ngOnInit() {                                                              //function to fetch countries data and store it in array
    this.getCountries.getCountriesApi().subscribe((data: any) => {
      let allCountriesName = data['data'];
      allCountriesName.map((country: any) => {
        // console.log(country.country, country.code)
        this.countries.push(country.country)
      })
    })
  }

  divClass = '';
  classDiv = ''

  divClose() {                                                               //function to close countries list div
    this.classDiv = 'd-none'
  }

  divOpen() {                                                                //function to open countries list div
    this.classDiv = 'd-block'
  }

  getValue(e: any) {                                                         //function to add countries badges
    let value = e.target.innerHTML;
    this.badgeItems.push(value)
  }

  delete(i: any) {                                                           //function to delete badges
    this.badgeItems.splice(i, 1)
  }

  //

  firstBade = ''
  sendBadgeData() {
    this.sharedBadgeService.send_data.next(this.badgeItems);
    // this.sharedBadgeService.sendFirstBadge.next(this.badgeItems[0]);
  }

}
