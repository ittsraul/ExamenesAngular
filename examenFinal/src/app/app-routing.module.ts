import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vista1Component } from './views/vista1/vista1.component';
import { Vista2Component } from './views/vista2/vista2.component';

const routes: Routes = [
  { path: '', redirectTo: 'Vista1', pathMatch: 'full' },
  { path: 'Vista1', component: Vista1Component },
  { path: 'Vista2', component: Vista2Component }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
