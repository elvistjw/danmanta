// src/app/service-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,  // Componente standalone
  template: `
    <div class="bg-gray-900 p-6 rounded-lg hover:scale-105 transition-all">
      <h3 class="text-xl font-bold mb-3 text-[#FFD700]">{{title}}</h3>
      <p class="text-gray-300">{{description}}</p>
    </div>
  `
})
export class ServiceCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
