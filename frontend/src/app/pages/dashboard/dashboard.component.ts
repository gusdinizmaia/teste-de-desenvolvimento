import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {iTask} from '../../../types'
import { DataService } from '../../../services/api';
import { Router } from '@angular/router';
import { ModalDeleteComponent } from '../../components/modal-delete/modal-delete.component';
import { ModalEditComponent } from '../../components/modal-edit/modal-edit.component';
import { ModalCreateComponent } from '../../components/modal-create/modal-create.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ModalDeleteComponent, ModalEditComponent, ModalCreateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  tasks = [] as iTask[]

  taskSelected : iTask = {id:'',title:'', description:""}

  constructor(private api: DataService, private router : Router) {}

  ngOnInit(): void {
      this.api
        .getAllTasks()
        .then(res => {
          if(res.statusCode === 401){
            this.router.navigate(['/home'])
            localStorage.removeItem('token')
            }
          this.tasks = res
        })
    }

  onSelected(task : iTask){
    this.taskSelected = task
  }

  editTask(){
    console.log('editando')
  }

  deleteTask(task: iTask){
    this.api.deleteTask(task.id)
    this.tasks = this.tasks.filter(elem => elem !== task)
    this.taskSelected = {id:'',title:'', description:""}

  }
}
