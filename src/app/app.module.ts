import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { httpunionproviders } from './intercept-authe/unionintecept';
import { RequesthanService } from './intercept-authe/requesthan.service';
export * from './intercept-authe/unionintecept';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [httpunionproviders,RequesthanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
