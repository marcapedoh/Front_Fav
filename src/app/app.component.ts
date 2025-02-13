import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users!: string[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Appel GET pour récupérer les utilisateurs
    this.apiService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
