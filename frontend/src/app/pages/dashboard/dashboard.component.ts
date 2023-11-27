import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from '../../components/form-login/form-login.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormLoginComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  tasks = [{title:'lavar a casa', description:"com pano"},{title:'arruma a cama', description:"com pano"},{title:'tirar o lixo', description:"com pano"}]
}
