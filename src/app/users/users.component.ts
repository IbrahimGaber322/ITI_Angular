import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';
import { UserComponent } from '../user/user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [UsersService],
})
export class UsersComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  input: string = '';
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data.users;
      this.filteredUsers = this.users;
    });
  }
  handleKeyUp() {
    this.filteredUsers = this.users.filter((u) =>
      (u.email + u.firstName + u.lastName + u.username).includes(this.input)
    );
  }
}
