import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-book-list-item',
  standalone: true,
  imports: [],
  templateUrl: './book-list-item.component.html',
  styleUrl: './book-list-item.component.css'
})
export class BookListItemComponent {
  @Input() book: { title: string, author: string, genre: string, year: number } = {
    title: '',
    author: '',
    genre: '',
    year: 0
  };
}
