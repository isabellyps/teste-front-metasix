import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BvHeaderComponent } from './bv-header/bv-header.component';
import { BvFaqComponent } from './bv-faq/bv-faq.component';

@NgModule({
  declarations: [
    AppComponent,
    BvHeaderComponent,
    BvFaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
