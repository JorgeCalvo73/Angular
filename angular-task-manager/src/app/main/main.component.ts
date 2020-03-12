import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tasks : Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void{
    this.tasks = this.taskService.getTasks();
  }

  add(description: string): void{
    description = description.trim();
    if(!description){
      return;
    }else{

      this.tasks.push({description} as Task);
    }
  }

}
