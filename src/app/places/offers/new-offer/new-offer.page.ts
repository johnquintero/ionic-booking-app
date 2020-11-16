import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  constructor(private fb : FormBuilder) { }

  formNewOffer : FormGroup;



  ngOnInit() {
    this.formNewOffer =  this.fb.group({
      title : ['', Validators.required],
      description : [null, Validators.required],
      price : [0,Validators.required],
      datefrom : [new Date],
      dateto : [new Date],
    });
  }
  onCreateOffer(){
    console.log('Creating new offer...');
    console.log(this.formNewOffer);
  }

  

}
