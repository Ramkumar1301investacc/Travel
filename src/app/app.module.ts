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
import { FormPersonalDetailComponent } from './pages/traveller-form/form-personal-detail/form-personal-detail.component';
import { FormEkycNomineeComponent } from './pages/traveller-form/form-ekyc-nominee/form-ekyc-nominee.component';
import { FormMedicalDetailsComponent } from './pages/traveller-form/form-medical-details/form-medical-details.component';

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
    FormPersonalDetailComponent,
    FormEkycNomineeComponent,
    FormMedicalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOtpInputModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
