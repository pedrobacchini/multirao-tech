import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NgModule} from '@angular/core';
import {CandidatureComponent} from './candidature/candidature.component';
import {OngComponent} from './ong/ong.component';
import {RegisterProfileComponent} from './register-profile/register-profile.component';
import {ServiceDetailsComponent} from './service-details/service-details.component';
import {VoluntaryDashboardComponent} from './voluntary-dashboard/voluntary-dashboard.component';

const routesMain: Routes = [
  {path: 'candidature', component: CandidatureComponent},
  {path: 'voluntary-dashboard', component: VoluntaryDashboardComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ong', component: OngComponent},
  {path: 'register-profile', component: RegisterProfileComponent},
  {path: 'service-details', component: ServiceDetailsComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routesMain)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

