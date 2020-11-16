import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Place } from '../places-model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlces : Place[] =[];
  listedLoadedPlaces : Place[];

  constructor(private servicePlaces : PlacesService) {
   }

  ngOnInit() {
      this.loadedPlces = this.servicePlaces.places;
      this.listedLoadedPlaces = this.loadedPlces.slice(1);
  }

  segmentChanged(event : CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);
  }



}
