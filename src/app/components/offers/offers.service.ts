import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OfferModel} from "../../models/offer.model";

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private offersUrl = 'https://backend-recruitment-api.herokuapp.com/offers/'
  private categoryUrl = 'https://backend-recruitment-api.herokuapp.com/category/'


  constructor(private http: HttpClient) {
  }

  public getAllOffers() {
    return this.http.get<any>(this.offersUrl);
  }


  public deleteOffers(id: number) {
    return this.http.delete<any>(this.offersUrl + id);
  }

  public postOffer(body: OfferModel) {
    return this.http.post<any>(this.offersUrl, body);
  }

  public putOffer(body: OfferModel, id: number) {
    return this.http.put<any>(this.offersUrl + id + '/', body);
  }

  public getAllCategory() {
    return this.http.get<any>(this.categoryUrl);
  }

  getEmptyOffers(): OfferModel {
    return {
      id: 0,
      category: 0,
      category_name: '',
      title: '',
      description: '',
      price: '',
      created_at: new Date
    }
  }
}
