import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Task';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {

  public todo: Task[] = [];
  public done: Task[] = [];
  public inProgress: Task[] = [];
  public discarded: Task[] = [];
  public addTaskFormGroup: FormGroup;

  constructor() {
    this.addTaskFormGroup = new FormGroup({
      text: new FormControl('')
    });
  }



  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log(this.done);
  }

  addTask(): void{
    if (this.addTaskFormGroup.get('text')?.value){
      this.todo.push(new Task(this.addTaskFormGroup.get('text')?.value));
      this.addTaskFormGroup.get('text')?.setValue('');
    }
  }

}
