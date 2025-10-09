import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiUrl = 'http://127.0.0.1:8000/'; // Cambia esta URL por la de tu API

  constructor(private http: HttpClient) { }

  getprediccion(text: string): Observable<any> {
    return this.http.get<any>(this.apiUrl+"prediccion/"+text);
  }
}
