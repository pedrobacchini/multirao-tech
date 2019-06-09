import { Component, OnInit } from '@angular/core';
import {ApplicationStatusService} from '../application-status.service';

@Component({
  selector: 'app-register-voluntary',
  templateUrl: './register-voluntary.component.html',
  styleUrls: ['./register-voluntary.component.css']
})
export class RegisterVoluntaryComponent implements OnInit {

  constructor(private applicationStatusService: ApplicationStatusService) { }

  ngOnInit() {
  }

}
