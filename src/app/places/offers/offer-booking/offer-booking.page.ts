import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Offer } from '../offers-model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offer-booking',
  templateUrl: './offer-booking.page.html',
  styleUrls: ['./offer-booking.page.scss'],
})
export class OfferBookingPage implements OnInit {

  offer : Offer;

  constructor(private _activatedRoute : ActivatedRoute,
              private _offersService : OffersService,
              private _navCtrl : NavController) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this._navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.offer = this._offersService.getOffer(paramMap.get('placeId'));
    });
  }

}
