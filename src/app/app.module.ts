import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { RegisterProfileComponent } from './register-profile/register-profile.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { OngComponent } from './ong/ong.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VonluntarioCandidaturasComponent } from './vonluntario-candidaturas/vonluntario-candidaturas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidatureComponent,
    RegisterProfileComponent,
    ServiceDetailsComponent,
    OngComponent,
    NavBarComponent,
    VonluntarioCandidaturasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
