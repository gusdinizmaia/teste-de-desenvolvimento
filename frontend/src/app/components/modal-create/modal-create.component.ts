import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iTask } from '../../../types';
import { DataService } from '../../../services/api';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-create.component.html',
  styleUrl: './modal-create.component.css'
})
export class ModalCreateComponent {
  mostrar: boolean = false;

  taskSelected = {} as iTask

  createForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private api:DataService) {}

  toggle(){
    this.mostrar = !this.mostrar;
  }

  createTask(){
    this.api.createTask(this.createForm.value).then(res => this.mostrar = !this.mostrar)
  }
}
