import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = environment.url_DataBase + "USERS"
  constructor(private http: HttpClient) { }

  getUsuario(id: number) {

    return this.http.get(this.url + id)

  }
}
