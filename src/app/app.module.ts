import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BvHeaderComponent } from './bv-header/bv-header.component';
import { BvFaqComponent } from './bv-faq/bv-faq.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BvCategoriasComponent } from './bv-categorias/bv-categorias.component';
import { BvLocaisComponent } from './bv-locais/bv-locais.component';
import { BvHomeComponent } from './bv-home/bv-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BvFaqGerenciarComponent } from './bv-faq-gerenciar/bv-faq-gerenciar.component';

@NgModule({
  declarations: [
    AppComponent,
    BvHeaderComponent,
    BvFaqComponent,
    BvCategoriasComponent,
    BvLocaisComponent,
    BvHomeComponent,
    BvFaqGerenciarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
