import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

    <header> 
      <nav class="navbar navbar-inverse">
        <div>
          <a href="/" class="navbar-brand">My Angular 2 App!</a>
        </div>
      </nav>
    </header>

    <main>
      <div class="jumbotron">
        <h1>Welcome to our App!</h1>
        <p>{{message}}</p>
      </div>

      <div *ngIf="users">
        <div *ngFor="let user of users">
          <p>The user is: {{user.name}} ({{user.username}}).</p>
        </div>
      </div>
    </main>

    <footer class="text-center">
      Copyright &copy; 2016
    </footer>
  `,
  styles: [
    `.jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2) } `
  ]
})

export class AppComponent {
  message = "Hello!";
  users = [
    { id: 25, name: 'Chris', username: 'sevilayha'},
    { id: 26, name: 'Nick', username: 'whatnicktweets'},
    { id: 27, name: 'Holly', username: 'hollylawly'}
  ];
}