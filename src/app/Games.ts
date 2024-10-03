// src/app/interfaces/game.ts

export interface Game {
  name: string;
  type: string;
  releaseYear: number;
  multiplayer: boolean;
  platform?: string; //Optional property
}
