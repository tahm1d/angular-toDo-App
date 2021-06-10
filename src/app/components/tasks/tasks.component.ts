import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import {TaskService} from '../../services/task.service';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  showOrHide: boolean;
  subscription: Subscription;

  constructor(private taskService: TaskService, private uiService:UiService) {
    this.subscription = this.uiService.onChange().subscribe((value)=>(this.showOrHide = value));
    
   }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks=tasks);
  }

  deleteTask(task: Task){

    this.taskService.deleteTasks(task).subscribe(() => this.tasks=this.tasks.filter((t)=> t.id !== task.id));
  }

  toggleReminder(task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task)
  {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

  updateTask(task: Task)
  {
    this.taskService.updateTask(task).subscribe(() => this.taskService.getTasks().subscribe((tasks) => this.tasks=tasks));
  }

  change(){
    console.log("clicked item");
    this.uiService.toggleHide();
  }

}
