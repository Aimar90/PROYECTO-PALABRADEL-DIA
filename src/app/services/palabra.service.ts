import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { palabraModel } from '../model/intecambio.interface';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {

  url = env.url_DataBase + "palabras"
  constructor(private http: HttpClient) { 
  }

  getPalabras(): Observable<palabraModel[]>{

    return this.http.get<palabraModel[]>(this.url)

  }
}
