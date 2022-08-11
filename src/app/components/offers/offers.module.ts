import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OffersComponent} from "./offers.component";
import {OffersService} from "./offers.service";
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {OffersEditComponent} from './offers-edit/offers-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
  declarations: [
    OffersComponent,
    OffersEditComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    DropdownModule
  ],
  providers: [
    OffersService,
    ConfirmationService,
    MessageService]
})
export class OffersModule {
}
