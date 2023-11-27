import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from '../../components/form-login/form-login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormLoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
