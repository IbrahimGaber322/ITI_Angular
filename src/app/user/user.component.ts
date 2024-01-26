import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { User } from '../user';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user: User;
  constructor() {}

}
