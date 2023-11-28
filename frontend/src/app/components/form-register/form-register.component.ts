import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../services/api';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule , NgFor],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {

  userForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private api: DataService) {}

  onSubmit() {
    this.api
        .createUser(this.userForm)
        .then(res => console.log(res))
  }
}
