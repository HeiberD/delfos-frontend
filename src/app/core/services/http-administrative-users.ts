import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpAdministrativeUsers {
  constructor(private paquita: HttpClient) {}

  createAdministrativeUser(administrativeUser: any) {
    //Aca despues tenemos que agregar los token para enviarselos al http y haga la ligica segun el backend
    return this.paquita.post('http://localhost:3000/api/v1/users', administrativeUser)
  }
}