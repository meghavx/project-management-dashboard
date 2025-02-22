import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header>
      <nav>
        <ul>
          <li routerLink="/home">Home</li>
          <li routerLink="/manage">Manage</li>
          <li routerLink="/dashboard">Dashboard</li>
        </ul>
      </nav>
      <div class="logout-btn">
        <button routerLink="/">Logout</button>
      </div>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {}
