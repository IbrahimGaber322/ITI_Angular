import { Component, HostListener } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule , MatButtonModule, MatProgressBarModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  active: number = 0;
  email = new FormControl('', [Validators.required, Validators.email]);
  skills:{title:string, value:number}[]=[{title:"Walking", value:100},
  {title:"Eating", value:100},
  {title:"Sleeping", value:100},
  {title:"Working", value:20}
]
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
 
  @HostListener('wheel', ['$event'])
  handleWheel(event: WheelEvent) {
    const delta = event.deltaY;

    if (delta > 0) {
      this.incrementActive();
    } else if (delta < 0) {
      this.decrementActive();
    }
  }

  incrementActive() {
    if (this.active < 2) {
      this.active++;
    }
  }

  decrementActive() {
    if (this.active > 0) {
      this.active--;
    }
  }
}
