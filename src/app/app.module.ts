import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {OffersModule} from "./components/offers/offers.module";
import {OffersService} from "./components/offers/offers.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OffersModule
  ],
  providers: [OffersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
