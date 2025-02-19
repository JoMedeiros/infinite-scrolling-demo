import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-item-list',
  imports: [NgIf, NgFor],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  currentPage = 1;
  isLoading = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.loadItems();
  }

  loadItems() {
    console.log('Carregando Items');
    if (this.isLoading) return;

    this.isLoading = true;
    this.dataService.getItems(this.currentPage).subscribe((newItems) =>{
      console.log('item recebido');
      this.items = [...this.items, ...newItems];
      this.currentPage++;
      this.isLoading = false;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      this.loadItems();
    }
  }
}
