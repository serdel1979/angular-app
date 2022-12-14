import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisResponse } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl: string = 'https://restcountries.com/v3.1'; 

  constructor(private http: HttpClient) { }

  buscarPais( paisBuscado: string): Observable<PaisResponse[]> {
    const url =`${this.apiUrl}/name/${paisBuscado}`;
    return this.http.get<PaisResponse[]>(url);
  }



}
