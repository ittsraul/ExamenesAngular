import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { CalculadoraComponent } from './views/calculadora/calculadora.component';
import { UserRegisterComponent } from './views/user-register/user-register.component';
import { ListEmployeeComponent } from './views/list-employee/list-employee.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CaracteristicasComponent } from './views/caracteristicas/caracteristicas.component';
import { PokemonComponent } from './views/pokemon/pokemon.component';

import { ContentComponent } from './components/content/content.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StarwarsComponent } from './views/starwars/starwars.component';
import { FormStarwComponent } from './components/form-starw/form-starw.component';
import { ChuknorriesComponent } from './views/chuknorries/chuknorries.component';
import { ChuknorriesFormComponent } from './components/chuknorries-form/chuknorries-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CalculadoraComponent,
    UserRegisterComponent,
    ListEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    CaracteristicasComponent,
    PokemonComponent,
    ContentComponent,
    StarwarsComponent,
    FormStarwComponent,
    ChuknorriesComponent,
    ChuknorriesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
