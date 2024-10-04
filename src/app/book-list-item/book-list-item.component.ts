import { Component,Input } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-book-list-item',
  standalone: true,
  imports: [CommonModule],
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
  @Input() isEven!: boolean;
}
