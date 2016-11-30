import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: [
    `
      .users-list li {
        cursor: pointer;
      }
      .jumbotron .glyphicon {
        font-size: 80px;
      }
    `
  ]
})

export class AppComponent {
  message = "Hello!";
  users = [
    { id: 25, name: 'Chris', username: 'sevilayha'},
    { id: 26, name: 'Nick', username: 'whatnicktweets'},
    { id: 27, name: 'Holly', username: 'hollylawly'}
  ];
  activeUser;

  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }
}
