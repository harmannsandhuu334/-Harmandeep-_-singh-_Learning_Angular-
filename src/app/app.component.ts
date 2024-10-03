import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
import { Game } from './interfaces/Games';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected property name
})

export class AppComponent {
  Games: Game[] = [
    {
      name: 'World_cup 2017',
      type: 'Cricket',
      releaseYear: 2017,
      multiplayer: true,
      platform: 'application'
    },
    {
      name: 'Super Mario Odyssey',
      type: 'Platformer',
      releaseYear: 2017,
      multiplayer: false,
      platform: 'Nintendo Switch'
    },
    {
      name: 'Fortnite',
      type: 'Battle Royale',
      releaseYear: 2017,
      multiplayer: true,
      platform: 'Multi-platform'
    },
    {
      name: 'Minecraft',
      type: 'Sandbox',
      releaseYear: 2011,
      multiplayer: true,
      platform: 'Multi-platform'
    },
    {
      name: 'Among Us',
      type: 'Party',
      releaseYear: 2018,
      multiplayer: true,
      platform: 'Multi-platform'
    },
    {
      name: 'Cyberpunk 2077',
      type: 'RPG',
      releaseYear: 2020,
      multiplayer: false,
      platform: 'PC/Console'
    }
  ];
}
