import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {TaskFilter} from '../task-filter';
import {Task} from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = this.taskService.listTasks(TaskFilter.All);
  updatingTaskId: number;
  deletingTaskId: number;
  tasksLeft = this.taskService.tasksLeft();
  currentFilter = TaskFilter.All;
  TaskFilter = TaskFilter;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  create(e: KeyboardEvent) {
    const input = e.target as HTMLInputElement;
    if (e.key === 'Enter' && input.value) {
      input.focus();
      this.taskService.createTask(input.value);
      input.value = '';
      this.tasksLeft = this.taskService.tasksLeft();
    }
  }

  update(task: Task, description: string) {
    task.description = description;
    this.taskService.updateTask(task);
    this.updatingTaskId = null;
  }

  complete(task: Task, checked: boolean) {
    task.done = checked;
    this.taskService.updateTask(task);
    this.tasksLeft = this.taskService.tasksLeft();
  }

  delete(task: Task) {
    this.taskService.deleteTask(task);
    this.deletingTaskId = null;
    this.tasksLeft = this.taskService.tasksLeft();
  }

  filter(filter: TaskFilter) {
    this.currentFilter = filter;
    this.tasks = this.taskService.listTasks(filter);
  }
}
