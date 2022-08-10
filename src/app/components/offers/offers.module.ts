import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OffersComponent} from "./offers.component";
import {OffersService} from "./offers.service";
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [OffersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RippleModule
  ],
  providers: [OffersService]
})
export class OffersModule { }
