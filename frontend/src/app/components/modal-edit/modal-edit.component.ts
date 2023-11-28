import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iTask } from '../../../types';
import { DataService } from '../../../services/api';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-edit.component.html',
  styleUrl: './modal-edit.component.css'
})
export class ModalEditComponent {
  mostrar: boolean = false;

  taskSelected = {} as iTask

  editForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private api:DataService) {}

  toggle(task : iTask){
    this.mostrar = !this.mostrar;
    this.taskSelected = task;
    this.editForm.patchValue({title:this.taskSelected.title})
    this.editForm.patchValue({description:this.taskSelected.description})
  }

  editTask(){
    console.log(this.editForm.value)
    this.api.editTask(this.editForm.value, this.taskSelected.id).then(res => this.mostrar = !this.mostrar)
  }
}
