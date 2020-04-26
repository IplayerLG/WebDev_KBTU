import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Sale } from './sale';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(
    private http: HttpClient
  ) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private BASE_URL = 'http://localhost:8000'
  getSales (): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.BASE_URL}/api/sales/`);
  }
  getSale(id: number): Observable<Sale> {
    return this.http.get<Sale>(`${this.BASE_URL}/api/sales/${id}/`)
  }
  addSale (sale: Sale): Observable<Sale> {
    sale.subscribers = 0;
    sale.user = 0;
    sale.deadline = 0;
    return this.http.post<Sale>(`${this.BASE_URL}/api/sales/`, sale, this.httpOptions);
  }
  deleteSale (sale: Sale | number): Observable<Sale> {
    const id = typeof sale === 'number' ? sale : sale.id;

    return this.http.delete<Sale>(`${this.BASE_URL}/api/sales/${id}/`, this.httpOptions);
  }
  updateSale (sale: Sale): Observable<any> {
    return this.http.put(`${this.BASE_URL}/api/sales/${sale.id}/`, sale, this.httpOptions);
  }
}
