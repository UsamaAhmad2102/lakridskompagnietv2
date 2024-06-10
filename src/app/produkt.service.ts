import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Produkt } from './produkt.model';

@Injectable({
  providedIn: 'root'
})
export class ProduktService {
  private apiUrl = 'https://localhost:44340/api/produkter';

  constructor(private http: HttpClient) { }

  getProdukter(): Observable<Produkt[]> {
    return this.http.get<Produkt[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getProduktById(id: number): Observable<Produkt> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Produkt>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError('There was an error fetching the data.');
  }
}
