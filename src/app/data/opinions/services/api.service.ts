import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { environment } from 'src/environments/environment';

function getHeaders() {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  if (!environment.production) {
    headers = headers.set(
      'X-Forwarded-For',
      `127.0.0.${Math.floor(Math.random() * 255)}`
    );
  }

  return headers;
}

const options = {
  headers: getHeaders(),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(path: string) {
    const url = environment.apiUrl + path;
    return this.http.get<T>(url, options);
  }

  post<T>(path: string, body: any) {
    const url = environment.apiUrl + path;
    return this.http.post<T>(url, body, options);
  }
}
