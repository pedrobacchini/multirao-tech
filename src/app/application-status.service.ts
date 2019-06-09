import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStatusService {

  logado = false;
  logadoOng = false;

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

  loginOng() {
    this.logadoOng = true;
  }

  logoutOng() {
    this.logadoOng = false;
  }
}
