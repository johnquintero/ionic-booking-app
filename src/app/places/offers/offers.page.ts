import { Component, OnInit } from '@angular/core';
import { Offer } from './offers-model';
import { OffersService } from './offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers : Offer[];
  constructor(private offerServices : OffersService) { }

  ngOnInit() {
    this.offers = this.offerServices.Offers;
  }


}
