import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes, ClientesAPI } from './models/cliente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  retornaClientes():Observable<Clientes>{
    return this.http
    .get<ClientesAPI>('http://localhost:3000/clientes')
    .pipe( map( (api)=> api.items));
  }

}
