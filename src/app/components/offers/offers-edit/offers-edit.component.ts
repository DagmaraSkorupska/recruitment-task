import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OfferModel} from "../../../models/offer.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OffersService} from "../offers.service";
import {ConfirmationService, ConfirmEventType, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import {take} from "rxjs";

@Component({
  selector: 'app-offers-edit',
  templateUrl: './offers-edit.component.html',
  styleUrls: ['./offers-edit.component.css']
})
export class OffersEditComponent implements OnInit {
  @Input() offer!: OfferModel;
  @Input() newOffer!: boolean;

  @Output() cancelEvent = new EventEmitter<void>();

  public offerForm!: FormGroup;
  public disabled = true;

  public category: any[] = [];


  constructor(private fb: FormBuilder,
              private router: Router,
              private location: Location,
              private offersService: OffersService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.offerForm = this.fb.group({
      category: [this.offer.category, Validators.required],
      category_name: [{value: this.offer.category_name, disabled: true}],
      // title: [{value: this.offer.title, disabled: true}],
      title: [this.offer.title, Validators.maxLength(150)],
      description: [this.offer.description],
      price: [this.offer.price, [Validators.required, Validators.min(0.01)]],
      created_at: [{value: this.offer.created_at, disabled: true}]
    });
    this.offersService.getAllCategory().pipe(take(1)).subscribe(result => this.category = result);
  }

  save() {
    this.offer = {...this.offer, ...this.offerForm.value};
    if (this.newOffer) {
      this.offersService.postOffer(this.offer).subscribe(() => console.log('new Offer'));
    } else {
      this.offersService.putOffer(this.offer, this.offer.id).subscribe(() => console.log('update Offer'));
    }
    this.cancelEvent.emit();
  }

  cancel(id: number) {
    if (this.newOffer) {
      this.cancelEvent.emit();
    } else {
      this.delete(id);
    }
  }

  delete(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.offersService.deleteOffers(id).subscribe(() => console.log('deleted'));
        this.cancelEvent.emit();
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected'});
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled'});
            break;
        }
      }
    });
  }
}


