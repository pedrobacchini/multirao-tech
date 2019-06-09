import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NgModule} from '@angular/core';
import {CandidatureComponent} from './candidature/candidature.component';
import {OngComponent} from './ong/ong.component';
import {ServiceDetailsComponent} from './service-details/service-details.component';
import {VoluntaryDashboardComponent} from './voluntary-dashboard/voluntary-dashboard.component';
import {RegisterVoluntaryComponent} from './register-voluntary/register-voluntary.component';
import {RegisterOngComponent} from './register-ong/register-ong.component';
import {HowWorkComponent} from './how-work/how-work.component';

const routesMain: Routes = [
  {path: 'candidature', component: CandidatureComponent},
  {path: 'voluntary-dashboard', component: VoluntaryDashboardComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'ong', component: OngComponent},
  {path: 'register-voluntary', component: RegisterVoluntaryComponent},
  {path: 'register-ong', component: RegisterOngComponent},
  {path: 'service-details', component: ServiceDetailsComponent},
  {path: 'how-work', component: HowWorkComponent},

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

