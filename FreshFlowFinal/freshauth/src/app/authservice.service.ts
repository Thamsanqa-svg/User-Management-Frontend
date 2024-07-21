import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private apiUrl = 'https://localhost:44383/api/Authentication'; // Update with your backend URL

  constructor(private http: HttpClient) {}

 /*register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Register`, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }*/
  /* register(user: any, role: string): Observable<any> {
      const url = `${this.apiUrl}/Register?role=${role}`;
      return this.http.post(url, user, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
    }*/
      register(user: any): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(`${this.apiUrl}/Register`, user, { headers });
      }
    
      confirmEmail(token: string, email: string): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get(`${this.apiUrl}/ConfirmEmail`, {
          headers,
          params: {
            token,
            email
          }
        });
      }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  forgotPassword(email: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/forgot-password`, { email }, { headers });
  }
  

  verifyOTP(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-otp`, { email, otp });
  }

  resetPassword(resetPasswordData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, resetPasswordData);
  }
  createRole(roleName: string): Observable<any> {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${this.apiUrl}/CreateRole?roleName=${roleName}`, {}, { headers });
  }

  assignRole(emailAddress: string, roleName: string): Observable<any> {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.apiUrl}/AssignRole?emailAddress=${emailAddress}&roleName=${roleName}`;
    return this.http.post(url, null, { headers }); // Sending null as body since parameters are in URL
  }
}
