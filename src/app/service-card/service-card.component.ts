// src/app/service-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,  // Componente standalone
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
