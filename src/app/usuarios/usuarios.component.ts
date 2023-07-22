import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent {
  users = [];
  displayedColumns: string[] = ['name', 'email', 'phone'];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }
}
