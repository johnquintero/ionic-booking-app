import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Place } from '../../places/places-model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace : Place;

  bookOffer : FormGroup;

  constructor(private modalCtrl : ModalController,
              private fb : FormBuilder) { }

  ngOnInit() {
    this.bookOffer = this.fb.group({
      firstName : ['', Validators.required],
      lastName: ['', Validators.required],
      numGuess : ['',Validators.required]
    });
  }

  onClose(){
    this.modalCtrl.dismiss(null,'cancel');
  }

  book(){
    this.modalCtrl.dismiss({message : 'boked!'},'sucess');
  }

}
