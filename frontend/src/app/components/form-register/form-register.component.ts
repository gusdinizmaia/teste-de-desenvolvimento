import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../services/api';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule , NgFor],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {

  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private api: DataService) {}

  onSubmit() {
    this.api
        .createUser(this.userForm.value)
        .then(res => console.log(res))
  }
}
