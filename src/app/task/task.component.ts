import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { Task } from '../task';
import { MatIcon , MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatCheckboxModule, MatCardModule, MatIcon, MatButtonModule, MatIconModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  providers: [TasksService]
})
export class TaskComponent {
  @Input() task: Task = { text: '', done: false, time:Date.now()};
  color:string="blue";
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() checkBox = new EventEmitter<void>();
 
  constructor(public tasksService:TasksService){}
  handleCheck(state:boolean) {
    this.task.done = !state;
    this.color = this.task.done? "red":"blue";
    this.checkBox.emit();
  }
  remove(){
    console.log(this.task.text);
     this.deleteEvent.emit(this.task.text);
     this.tasksService.remove(this.task.text);
  }
}
