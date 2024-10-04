import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
import { Game } from './interfaces/Games';
import { BookListComponent } from './book-list/book-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BookListComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected property name
})

export class AppComponent {

}
