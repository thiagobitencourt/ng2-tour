import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'user-form',
  styles: [`
    form {
      padding: 10px;
      background: #ECF0F1;
      border-radius: 3px;
    }
  `],
  templateUrl: './app/users/user-form.component.html'
})
export class UserFormComponent {
  @Output() userCreated = new EventEmitter();
  newUser: User = new User();
  active: boolean = true;

  onSubmit() {
    // show the event that the user was created
    this.userCreated.emit({ user: this.newUser });
    
    this.newUser = new User();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}