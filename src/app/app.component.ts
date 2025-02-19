import { Component } from '@angular/core';
import { ItemListComponent } from "./item-list/item-list.component";

@Component({
  selector: 'app-root',
  imports: [ItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'infinite-scrolling-demo';
}
