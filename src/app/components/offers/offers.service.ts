import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OfferModel} from "../../models/offer.model";
import {OffersComponent} from "./offers.component";
import {OffersModule} from "./offers.module";

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private offersUrl = 'https://backend-recruitment-api.herokuapp.com/offers/'
  private offersUrlJson = 'https://backend-recruitment-api.herokuapp.com/offers/?format=json'

  constructor(private http: HttpClient) {
  }

  // public getAllOffers() {
  //   return this.http.get<any>(this.offersUrlJson)
  //     .toPromise()
  //     .then(res => <OfferModel[]>res)
  //     .then(data => {return data});
  // }


  public getAllOffers() {
    return this.http.get<any>(this.offersUrl);
  }

}
