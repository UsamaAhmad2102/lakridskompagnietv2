import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:44365/api/authentication'; // Your API base URL
  private token: string | null = null;
  private userRole: string | null = null;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('authToken');
    this.userRole = localStorage.getItem('userRole');
  }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }, { headers })
      .pipe(
        map(response => {
          if (response.token) {
            localStorage.setItem('authToken', response.token);
            this.token = response.token;

            // Assume the response contains the user role
            localStorage.setItem('userRole', response.role);
            this.userRole = response.role;
          }
          return response;
        }),
        catchError(this.handleError)
      );
  }

  register(username: string, email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/register`, { username, email, password }, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    this.token = null;
    this.userRole = null;
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }

  getUserRole(): string | null {
    return this.userRole;
  }

  getToken(): string | null {
    return this.token;
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      if (error.status === 400) {
        errorMessage = 'Invalid request. Please check your input.';
      } else if (error.status === 401) {
        errorMessage = 'Unauthorized. Please check your credentials.';
      } else if (error.status === 500) {
        errorMessage = 'Internal Server Error. Please try again later.';
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    return throwError(errorMessage);
  }
}
