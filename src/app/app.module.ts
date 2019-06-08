import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { RegisterProfileComponent } from './register-profile/register-profile.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { OngComponent } from './ong/ong.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidatureComponent,
    RegisterProfileComponent,
    ServiceDetailsComponent,
    OngComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
