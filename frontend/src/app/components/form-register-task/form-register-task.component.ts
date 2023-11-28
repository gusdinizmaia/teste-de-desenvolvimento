import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-register-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule , NgFor],
  templateUrl: './form-register-task.component.html',
  styleUrl: './form-register-task.component.css'
})
export class FormRegisterTaskComponent {

  userForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.warn(this.userForm.value);
  }
}
