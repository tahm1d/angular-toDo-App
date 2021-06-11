import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  faTimes = faTimes;
  @Output() delete: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onClickChange: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task) {
    //console.log(task);
    this.delete.emit(task);
  }

  onToggle(task) {
    //console.log(task);
    this.onToggleReminder.emit(task);
  }

  onClick(task) {
    //console.log(task);
    this.onClickChange.emit(task);
  }

}
