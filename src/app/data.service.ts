import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private totalItems = 100;
  private pageSize = 10;
  constructor() { }

  getItems(page: number) {
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    const items = Array.from({ length: this.pageSize }, (_, i) => `Item ${startIndex + i + 1}`);

    return of (items).pipe(delay(1000)); // Simula um delay de 1 segundo
  }
}
