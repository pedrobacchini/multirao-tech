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

  vagasFixa = [];

  constructor(private applicationStatusService: ApplicationStatusService) { }

  ngOnInit() {

    this.vagasFixa.push({id: 1});
    this.vagasFixa.push({id: 2});
    this.vagasFixa.push({id: 3});
    this.vagasFixa.push({id: 4});

    for (let i = 5; i < Math.floor(Math.random() * 10) + 4; i++) {
      this.vagas.push({
        id: i
      });
    }

    const totalDeVagas = this.vagas.length;

    for (let i = totalDeVagas; i < Math.floor(Math.random() * 30) + 10 + totalDeVagas; i++) {
      this.suasVagas.push({
        id: i
      });
    }


    console.log(totalDeVagas);

  }
}
