import { Component, OnInit } from '@angular/core';
import {ApplicationStatusService} from '../application-status.service';

@Component({
  selector: 'app-register-ong',
  templateUrl: './register-ong.component.html',
  styleUrls: ['./register-ong.component.css']
})
export class RegisterOngComponent implements OnInit {

  constructor(private applicationStatusService: ApplicationStatusService) { }

  ngOnInit() {
  }

}
