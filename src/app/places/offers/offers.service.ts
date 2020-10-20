import { Injectable } from '@angular/core';
import { Offer } from './offers-model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private _offers : Offer[]=[
    new Offer("o1","San Andres","Playas de San Andres","https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Johnny_Cay_%288304072347%29.jpg/1280px-Johnny_Cay_%288304072347%29.jpg",100),
    new Offer("o2","Lima","Ciudad de Lima","https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Circuito_de_Playas%2C_Lima.jpg/800px-Circuito_de_Playas%2C_Lima.jpg",120),
    new Offer("o3","Punta Cana","Paraiso","https://upload.wikimedia.org/wikipedia/commons/f/f6/Punta_Cana_29_april_2012.jpg",102)
  ];
  
  constructor() { }

  //Esto es una propiedad
  get Offers(){
    return [...this._offers];
  }

  getOffer(id : string): Offer{
    return {...this._offers.find(o => o.id === id)};
  }
}
