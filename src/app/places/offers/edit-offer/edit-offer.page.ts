import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Offer } from '../offers-model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  offer : Offer;

  constructor(private _activeRoute : ActivatedRoute, private _offersService : OffersService,
              private _navCtrl : NavController) { }

  ngOnInit() {
    this._activeRoute.paramMap.subscribe(paramMap => {
      //Valida si el parametro existe en la coleccion de parametros
      if(!paramMap.has('placeId')){
        this._navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.offer = this._offersService.getOffer(paramMap.get('placeId'));
    },
    err => console.log(`Se presento un error : ${err}`)
    )
  }

}
