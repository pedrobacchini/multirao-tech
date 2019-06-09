import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  logado = false;
  constructor() { }

  ngOnInit() {
  }

  logar() {
    this.logado = true;
  }
}
