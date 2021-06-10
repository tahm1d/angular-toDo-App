import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private showOrHide: boolean = false;
  private subject = new Subject<any>();
  private subject2 = new Subject<any>();

  constructor() { }

  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
    console.log(this.showAddTask+" addtask");
  }

  toggleHide(): void{
    this.showOrHide = !this.showOrHide;
    this.subject2.next(this.showOrHide);
    console.log(this.showOrHide +" hide");
  }


  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

  onChange(): Observable<any>{
    console.log("inside onChange");
    return this.subject2.asObservable();
  }
}
