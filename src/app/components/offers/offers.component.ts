import {Component, OnInit, ViewChild} from '@angular/core';
import {OffersService} from "./offers.service";
import {take} from "rxjs";
import {OfferModel} from "../../models/offer.model";
import {Table} from "primeng/table";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  public offers!: OfferModel[];

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getAllOffers().pipe(take(1)).subscribe(result => {
      this.offers = result;
    });
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt!.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }
}
