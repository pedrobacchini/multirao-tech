import { Component, OnInit } from '@angular/core';
import {ApplicationStatusService} from '../application-status.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private applicationStatusService: ApplicationStatusService) { }

  ngOnInit() {
  }

  logar() {
    this.applicationStatusService.login();
  }
  logarOng(){
    this.applicationStatusService.loginOng();
  }
}
