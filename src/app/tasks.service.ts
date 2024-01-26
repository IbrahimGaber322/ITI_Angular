import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = [];
  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): Task[] {
    if (this.notDuplicate(task.text)) {
      this.tasks.unshift(task);
    }
    return this.tasks;
  }

  private notDuplicate(text: string): boolean {
    let duplicate: boolean;
    this.tasks.find((t) => t.text === text)
      ? (duplicate = false)
      : (duplicate = true);
    return duplicate;
  }

  remove(text: string): Task[] {
    this.tasks = this.tasks.filter((t) => t.text !== text);
    this.reOrder();
    return this.tasks;
  }

  reOrder(): Task[] {
    this.tasks
      .sort((a, b) => a.time - b.time)
      .sort((a, b) => Number(a.done) - Number(b.done));
    return this.tasks;
  }
}
