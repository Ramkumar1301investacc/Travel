import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { UpperfooterComponent } from './component/upperfooter/upperfooter.component';
import { TravelHomeComponent } from './pages/travel-home/travel-home.component';
import { TravelDestinationComponent } from './pages/travel-destination/travel-destination.component';
import { DestinationDateComponent } from './pages/travel-destination/destination-date/destination-date.component';
import { TravellersAgeComponent } from './pages/travel-destination/travellers-age/travellers-age.component';
import { MobileNumComponent } from './pages/travel-destination/mobile-num/mobile-num.component';
import { GetOtpComponent } from './pages/travel-destination/get-otp/get-otp.component';

import { NgOtpInputModule } from  'ng-otp-input';
import { FirstQuotesComponent } from './pages/first-quotes/first-quotes.component';
import { QuotesComponent } from './pages/first-quotes/quotes/quotes.component';
import { CompareQuotesComponent } from './pages/first-quotes/compare-quotes/compare-quotes.component';
import { TravellerFormComponent } from './pages/traveller-form/traveller-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CountrySearchBoxComponent } from './pages/travel-destination/destination-date/country-search-box/country-search-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from "./pages/travel-destination/destination-date/date-picker/date-picker.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        UpperfooterComponent,
        TravelHomeComponent,
        TravelDestinationComponent,
        DestinationDateComponent,
        TravellersAgeComponent,
        MobileNumComponent,
        GetOtpComponent,
        FirstQuotesComponent,
        QuotesComponent,
        CompareQuotesComponent,
        TravellerFormComponent,
        CountrySearchBoxComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOtpInputModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        DatePickerComponent
    ]
})
export class AppModule { }
