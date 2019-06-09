import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {

  candidaturas = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < Math.random() * 10; i++) {
      this.candidaturas.push({
        id: i
      });
    }
  }

}
