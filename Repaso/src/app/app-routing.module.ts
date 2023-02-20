import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOneComponent } from './views/view-one/view-one.component';
import { ViewTwoComponent } from './views/view-two/view-two.component';

const routes: Routes = [
  { path:'', redirectTo: 'view-one', pathMatch:'full'},
  { path: 'view-one', component: ViewOneComponent},
  { path: 'view-two', component: ViewTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
