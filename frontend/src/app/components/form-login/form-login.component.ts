import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule , NgFor],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {

  userForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private api: DataService,private router: Router) {}

  onSubmit() {
    console.log(this.userForm.value)
    this.api
        .loginUser(this.userForm.value).then(res => this.router.navigate(['/dashboard']))
  }}
