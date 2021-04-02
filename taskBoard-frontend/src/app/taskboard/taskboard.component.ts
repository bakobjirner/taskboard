import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Task';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {

  private tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
