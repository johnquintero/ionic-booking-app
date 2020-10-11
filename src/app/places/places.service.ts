import { Injectable } from '@angular/core';
import { Place } from './places-model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places : Place[] = [
    
    new Place('p1','Colombia','Pais del cafe','https://images.freeimages.com/images/large-previews/130/colombia-1521465.jpg',10.99),
    new Place('p2','Peru','Pais del ceviche','https://images.freeimages.com/images/large-previews/03e/peru-machu-picchu-2-1525021.jpg',15.00),
    new Place('p3','NewYork','La gran manzana','https://images.freeimages.com/images/large-previews/99a/new-york-1-1447457.jpg',50.00)
  ];
  constructor() { }

  get places(){
    return [...this._places];
  }
}
