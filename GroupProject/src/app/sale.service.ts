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
    private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private salesUrl = 'api/sales'
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  getSales (): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.salesUrl)
      .pipe(
        catchError(this.handleError<Sale[]>('getSales', []))
      );
  }
  getSale(id: number): Observable<Sale> {
    const url = `${this.salesUrl}/${id}`;
    return this.http.get<Sale>(url).pipe(
      catchError(this.handleError<Sale>(`getSale id=${id}`))
    );
  }
  addSale (sale: Sale): Observable<Sale> {
    sale.subscribers = 0;
    return this.http.post<Sale>(this.salesUrl, sale, this.httpOptions).pipe(
      catchError(this.handleError<Sale>('addSale'))
    );
  }
  deleteSale (sale: Sale | number): Observable<Sale> {
    const id = typeof sale === 'number' ? sale : sale.id;
    const url = `${this.salesUrl}/${id}`;

    return this.http.delete<Sale>(url, this.httpOptions).pipe(
      catchError(this.handleError<Sale>('deleteSale'))
    );
  }
  updateSale (sale: Sale): Observable<any> {
    return this.http.put(this.salesUrl, sale, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateSale'))
    );
  }
}
