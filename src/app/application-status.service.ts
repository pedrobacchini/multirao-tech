import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStatusService {

  logado = false;

  constructor() { }

  login() {
    this.logado = true;
  }

  logout() {
    this.logado = false;
  }
}
