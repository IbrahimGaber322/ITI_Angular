import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from '../task/task.component';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    MatCardModule,
    NgStyle,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    TaskComponent,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  providers: [TasksService],
})
export class TodoComponent {
  input: string = '';
  tasks: Task[] = [];

  constructor(public tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
  }

  addTask(e: KeyboardEvent) {
    if (e.code === 'Enter' && this.input.length > 0) {
      this.tasks = this.tasksService.addTask({
        text: this.input,
        done: false,
        time: Date.now(),
      });
      this.input = '';
    }
  }

  remove(text: string) {
    this.tasks = this.tasksService.remove(text);
  }

  reOrder() {
    this.tasks = this.tasksService.reOrder();
  }
}
