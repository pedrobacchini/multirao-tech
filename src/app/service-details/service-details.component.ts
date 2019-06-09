import { Component, OnInit } from '@angular/core';
import { ApplicationStatusService } from '../application-status.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  constructor(private status: ApplicationStatusService) { }

  ngOnInit() {
  }

}
