import { Component, EventEmitter, Output } from '@angular/core';
import { GetcountriesService } from 'src/app/service/getcountries.service';
GetcountriesService

@Component({
  selector: 'app-destination-date',
  templateUrl: './destination-date.component.html',
  styleUrls: ['./destination-date.component.css']
})
export class DestinationDateComponent {

  constructor(private getCountries: GetcountriesService) { }

  countries: any = [];

  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    // console.log(this.searchText)
  }

  ngOnInit() {
    this.getCountries.getCountriesApi().subscribe((data: any) => {
      let allCountriesName = data['data'];
      allCountriesName.map((country: any) => {
        // console.log(country.country);
        this.countries.push(country.country)
      })
    })
  }

  divClass = '';
  classDiv = ''

  divClose() {
    this.classDiv = 'd-none'
  }

  divOpen() {
    this.classDiv = 'd-block'
  }

  addBadge() {

  }

}
