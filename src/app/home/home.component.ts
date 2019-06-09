import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vagas = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < Math.random() * 10; i++) {
      this.vagas.push({
        id: i
      });
    }
  }
}
