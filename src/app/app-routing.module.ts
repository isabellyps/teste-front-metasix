import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BvFaqComponent } from './bv-faq/bv-faq.component';
import { BvHomeComponent } from './bv-home/bv-home.component';
import { BvLocaisComponent } from './bv-locais/bv-locais.component';
import { BvCategoriasComponent } from './bv-categorias/bv-categorias.component';

const routes: Routes = [
  { path: 'home', component: BvHomeComponent },
  { path: 'faq', component: BvFaqComponent},
  { path: 'locais', component: BvLocaisComponent },
  { path: 'categorias', component: BvCategoriasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
