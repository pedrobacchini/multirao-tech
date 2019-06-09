import { Component, OnInit } from '@angular/core';
import {ApplicationStatusService} from '../application-status.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  suasVagas = [];
  vagas = [];

  constructor(private applicationStatusService: ApplicationStatusService) { }

  ngOnInit() {
    for (let i = 0; i < Math.floor(Math.random() * 10) + 4; i++) {
      this.suasVagas.push({
        id: i
      });
    }

    const totalDeVagas = this.suasVagas.length;
    console.log(totalDeVagas);
    for (let i = totalDeVagas; i < Math.floor(Math.random() * 30) + 10 + totalDeVagas; i++) {
      this.vagas.push({
        id: i
      });
    }
  }
}
