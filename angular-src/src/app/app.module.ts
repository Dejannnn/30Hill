import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ShowPeopleComponent } from './show-direct-people/show-people.component';
import { AppAllPeopleComponent } from './app-all-people/app-all-people.component';
import { ShowFreindsOfFreindsComponent } from './show-freinds-of-freinds/show-freinds-of-freinds.component';
import { ShowSuggrstionFreindsComponent } from './show-suggrstion-freinds/show-suggrstion-freinds.component';
//imort service

import { AppForAllServiceService } from './app-for-all-service.service';



@NgModule({
  declarations: [
    AppComponent,
    ShowPeopleComponent,
    AppAllPeopleComponent,
    ShowFreindsOfFreindsComponent,
    ShowSuggrstionFreindsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '' , component: AppAllPeopleComponent},
      { path: 'show/direct/:id' , component: ShowPeopleComponent},
      { path: 'show/freinds/:id' , component: ShowFreindsOfFreindsComponent},
      { path: 'show/suggestion/:id' , component: ShowSuggrstionFreindsComponent},
    ])],
  providers: [ AppForAllServiceService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
