import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent {

  personalDetail = new FormGroup({
    salutation : new FormControl('null'),
    firstName:new FormControl(''),
    middleName:new FormControl(''),
    surName:new FormControl(''),
    dob:new FormControl(''),
    passportNo:new FormControl(''),
    emailId:new FormControl(''),
    phoneNumber:new FormControl(''),
    alternatePhoneNumber:new FormControl(''),
    addressLine_1:new FormControl(''),
    addressLine_2:new FormControl(''),
    addressLine_3:new FormControl(''),
    state:new FormControl(''),
    city:new FormControl(''),
    pincode:new FormControl(''),
    /* ispermanentAdress:new FormControl(''), */
    
  });

  onSubmit() {
    console.log(this.personalDetail.value)
    }
  

}

