import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:44365/api/authentication'; // Din API base URL
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

            // Antag, at svaret indeholder brugerrollen
            localStorage.setItem('userRole', response.role);
            this.userRole = response.role;
          }
          return response;
        })
      );
  }

  register(username: string, email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/register`, { username, email, password }, { headers });
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
}
