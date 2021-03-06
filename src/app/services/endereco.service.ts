import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../models/endereco';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  findbyID(id: any): Observable<Endereco> {
    return this.http.get<Endereco>(`${API_CONFIG.baseUrl}/Endereco/${id}`);
  }

  findAll(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(`${API_CONFIG.baseUrl}/Endereco`);
  }

  create(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(`${API_CONFIG.baseUrl}/Endereco`, endereco);
  }

  update(endereco: Endereco): Observable<Endereco> {
    return this.http.put<Endereco>(
      `${API_CONFIG.baseUrl}/Endereco/${endereco.id}`,
      endereco
    );
  }

  delete(id: any): Observable<Endereco> {
    return this.http.delete<Endereco>(`${API_CONFIG.baseUrl}/Endereco/${id}`);
  }
}
