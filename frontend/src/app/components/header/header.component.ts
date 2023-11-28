import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  token = ''

  constructor( private router : Router) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token') ?? ''
    }

  exit(){
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }

}
