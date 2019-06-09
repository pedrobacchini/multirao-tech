import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStatusService {

  logado = false;

  registrando = false;

  registrar(){
    this.registrando = true;
    console.log("clICOU");
  }


  constructor() { }

  login() {
    this.logado = true;
  }

  logout() {
    this.logado = false;
  }
}
