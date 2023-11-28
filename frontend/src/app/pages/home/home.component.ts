import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { Router } from '@angular/router';
import { FormRegisterComponent } from '../../components/form-register/form-register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormLoginComponent, FormRegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  login = true

  ngOnInit(): void {
    const token = localStorage.getItem('token')

    if(token){
      this.router.navigate(['/dashboard'])
    }
  }

  showRegister(){
    this.login = !this.login
  }
}
