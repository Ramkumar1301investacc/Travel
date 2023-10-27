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

  enteredSearchValue : any = ''

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChanged()
  {
    this.searchTextChanged.emit(this.enteredSearchValue)
  }

  ngOnInit() {
    this.getCountries.getCountriesApi().subscribe((data: any) => {
      let allCountriesName = data['data'];
      allCountriesName.map((country: any) => {
        console.log(country.country);
        this.countries.push(country.country)
      })
    })
  }

}
