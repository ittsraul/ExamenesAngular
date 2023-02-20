import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Vista1Component } from './views/vista1/vista1.component';
import { Vista2Component } from './views/vista2/vista2.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { FormStarwComponent } from './components/form-starw/form-starw.component';

@NgModule({
  declarations: [
    AppComponent,
    Vista1Component,
    Vista2Component,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    FormStarwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
