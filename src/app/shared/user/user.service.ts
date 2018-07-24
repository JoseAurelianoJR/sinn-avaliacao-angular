import { URL_API } from './../url.api';
import { HttpClient } from '@angular/common/http';



import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  user: User;

  getAll(){
    return this.http.get<any[]>('http://ec2-13-59-74-180.us-east-2.compute.amazonaws.com:8000/api/usuarios');
  }

  getUser() {
    return this.user;
  }

  setUser(usuarioDelegacoes) {
    this.user = usuarioDelegacoes;
  }

  getCurrentUser(): Observable<User> {
      return this.http.get<User>(`${URL_API}user/current`);
  }
}
