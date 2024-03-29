import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  set(data: any) {
    localStorage.setItem('jwt', data.jwt);
  }

  handle(data: any) {
    this.set(data);
  }

  getJwt() {
    return localStorage.getItem('jwt');
  }


  remove() {
    localStorage.removeItem('jwt');
  }

  decode(payload : any) {
    return JSON.parse(atob(payload));
  }

  payload(jwt: any) {
    const payload = jwt.split('.')[1];
    return this.decode(payload);
  }


  isValid() {
    const jwt = this.getJwt();

    if (jwt) {

      const payload = this.payload(jwt);

      return true;
    }
    return false;
  }

  getInfos() {

    const jwt = this.getJwt();

    if (jwt) {
      const payload = this.payload(jwt);
      return payload ? payload : null;
    }

    return null
  }


  loggedIn() {
    return this.isValid();
  }



}
