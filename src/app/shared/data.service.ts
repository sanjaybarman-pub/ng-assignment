import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 dummyDataUrl: string = 'https://dummyjson.com/products?limit=40'
 localhostDataUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.dummyDataUrl);
  }

  getStudents(limit: number = 20): Observable<any> {
    return this.http.get(`${this.localhostDataUrl}students?_limit=${limit}`);
  }
}
