import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { BookListItemComponent } from '../book-list-item/book-list-item.component'; // Import the list item component

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookListItemComponent],  // Add CommonModule here
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', year: 1951 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', year: 1960 },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian', year: 1949 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', year: 1813 }
  ];
}
