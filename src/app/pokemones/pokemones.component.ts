import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss'],
})
export class PokemonesComponent {
  pokemons = [];
  displayedColumns: string[] = ['name', 'url'];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPokemons().subscribe((response) => {
      this.pokemons = response.results;
    });
  }
}
