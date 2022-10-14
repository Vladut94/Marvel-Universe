import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Create your team and save the universe', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'View all superheroes', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Take a look at superpowers', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Custom the superheroes or superpowers', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
