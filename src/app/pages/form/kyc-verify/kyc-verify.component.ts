import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kyc-verify',
  templateUrl: './kyc-verify.component.html',
  styleUrls: ['./kyc-verify.component.css'],
})
export class KycVerifyComponent {
  kycDetail = new FormGroup({
    verificationOption: new FormControl(''),
    CardNumber: new FormControl(''),
    nomineeFirstName: new FormControl(''),
    nomineeRelationship: new FormControl(''),
    nomineeAge: new FormControl(''),
    nomineeMail_id: new FormControl(''),
    nomineePhone_no: new FormControl(''),
  });
  onSubmit() {
    console.log(this.kycDetail.value)
  }
}
