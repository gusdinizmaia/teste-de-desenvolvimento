import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {iTask} from '../../../types'
import { DataService } from '../../../services/api';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  tasks = [] as iTask[]

  taskSelected : iTask = {title:'', description:""}

  constructor(private api: DataService) {}

  ngOnInit(): void {
      this.api
        .getAllTasks()
        .then(res => this.tasks = res)
        .then((res) => console.log(res));
  }

  onSelected(task : iTask){
    this.taskSelected = task
  }

  editTask(){
    console.log('editando')
  }
  deleteTask(){
    console.log('excluindo')
  }
}
