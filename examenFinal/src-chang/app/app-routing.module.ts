import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './views/calculadora/calculadora.component';
import { PokemonComponent } from './views/pokemon/pokemon.component';
import { UserRegisterComponent } from './views/user-register/user-register.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { StarwarsComponent } from './views/starwars/starwars.component';
import { ChuknorriesComponent } from './views/chuknorries/chuknorries.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'calculadora', pathMatch: 'full' }, 
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'Starwars', component: StarwarsComponent},
  { path: 'Chuknorries', component: ChuknorriesComponent}
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
