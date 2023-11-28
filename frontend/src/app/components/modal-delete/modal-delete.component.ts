import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/api';
import { iTask } from '../../../types';

@Component({
  selector: 'app-modal-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.css'
})
export class ModalDeleteComponent {

  mostrar: boolean = false;

  taskSelected = {} as iTask

  constructor(private api:DataService){}

  toggle(){
    this.mostrar = !this.mostrar;
    
  }

  deleteTask(task: iTask){
    this.api.deleteTask(task.id)
  }
}
