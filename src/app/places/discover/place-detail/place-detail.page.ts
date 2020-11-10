import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../places-model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place : Place;
  constructor(private _activatedRouter :ActivatedRoute,
              private _placeService : PlacesService,
              private _navCtrl : NavController,
              private _modalCtrl : ModalController,
              public _actionCtrl : ActionSheetController) { }

  ngOnInit() {
    //Se suscribe al paramMpa para que este siempre observando los cambios de los parametros sin importar que este en el OnInit este se quedara ejecutando.
    this._activatedRouter.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this._navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this._placeService.getPlace(paramMap.get('placeId'));
    });
 
  }
 


  async presentActionSheet(){
    const actionSheet = await this._actionCtrl.create({
      header:'Options',
      buttons: [
        {
          text: "Select Date",
          handler : () => {
            this.openBookModal("select");
          }
        },
        {
          text: "Random Date",
          handler : () => {
            this.openBookModal("random");
          }
        },
        {
          text: "Cancel",
          role: "cancel"
        }
      ]
    });
    await actionSheet.present();
  }

  openBookModal(mode : 'select' | 'random'){
    console.log(mode);
    this._modalCtrl.create({
      component : CreateBookingComponent,
      componentProps : {selectedPlace : this.place},
      cssClass: 'my-custom-modal-css'
    }).then(m => {
      m.present();
      return m.onDidDismiss();
    }).then(data => {
      console.log(data);
      if(data.role==='sucess'){
        console.log('Works!');
      }
    });
  }
}
