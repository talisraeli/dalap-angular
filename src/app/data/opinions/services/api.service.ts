import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3000';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(path: string) {
    const url = baseUrl + path;
    return this.http.get<T>(url);
  }

  post<T>(path: string, body: any) {
    const url = baseUrl + path;
    return this.http.post<T>(url, body, options);
  }
}
