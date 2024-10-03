import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected property name
})
export class AppComponent {
  Games = {
    name: 'World_cup 2017',
    type: 'Cricket',
    releaseYear: 2017,
    multiplayer: true,
    platform: 'application'
  };
}
