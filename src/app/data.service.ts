import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.org/posts';
  private totalItems = 100;
  private pageSize = 10;
  constructor(private http: HttpClient) { }

  getItems(page: number): Observable<any[]> {
    //const params = {}
    //const startIndex = (page - 1) * this.pageSize;
    //const endIndex = startIndex + this.pageSize;
    //const items = Array.from({ length: this.pageSize }, (_, i) => `Item ${startIndex + i + 1}`);

    //return of (items).pipe(delay(1000)); // Simula um delay de 1 segundo
    return this.http.get<any[]>(this.apiUrl).pipe(delay(5000));
  }
}
