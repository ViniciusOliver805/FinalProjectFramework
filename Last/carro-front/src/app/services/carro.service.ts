import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';
import { Carro } from '../model/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  
  
  findAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${API_CONFIG.baseUrl}/carro`);
  }

}
