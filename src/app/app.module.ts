import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { OngComponent } from './ong/ong.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { VoluntaryRegisterComponent } from './voluntary-register/voluntary-register.component';
import { VoluntaryDashboardComponent } from './voluntary-dashboard/voluntary-dashboard.component';
import { RegisterVoluntaryComponent } from './register-voluntary/register-voluntary.component';
import { RegisterOngComponent } from './register-ong/register-ong.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidatureComponent,
    ServiceDetailsComponent,
    OngComponent,
    NavBarComponent,
    // VonluntarioCandidaturasComponent,
    PageNotFoundComponent,
    // VoluntaryMenuComponent,
    VoluntaryRegisterComponent,
    VoluntaryDashboardComponent,
    RegisterVoluntaryComponent,
    RegisterOngComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
