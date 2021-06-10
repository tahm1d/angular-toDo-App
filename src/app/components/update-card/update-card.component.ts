import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css'],
})
export class UpdateCardComponent implements OnInit {
  id: number;
  text: string;
  day: string;
  reminder: boolean = false;
  showOrHide: boolean;
  subscription: Subscription;

  @Output() onUpdateTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onChange()
      .subscribe((value) => (this.showOrHide = value));
  }

  ngOnInit(): void {}

  onUpdate() {
    if (!this.text) {
      alert('please add task');
      return;
    }

    const newTask = {
      id: this.id,
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onUpdateTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
