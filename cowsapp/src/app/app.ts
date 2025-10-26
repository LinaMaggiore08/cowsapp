import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('My Cow Collection');
  protected readonly version = signal('1.0');

  private router = inject(Router);
  private http = inject(HttpClient);

  constructor() {}

  displayVersion() {
    alert(`Version: ${this.version()}`);
  }

  displayFarmList() {
    this.router.navigate(['list-farms'], { queryParams: { data: new Date()} });
  }
}
