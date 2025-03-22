// src/app/testimonial.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,  // Componente standalone
  template: `
    <div class="bg-gray-900 p-6 rounded-lg">
      <p class="italic mb-4">{{quote}}</p>
      <div class="flex items-center">
        <img [src]="image" class="w-12 h-12 rounded-full mr-4" [alt]="name">
        <div>
          <h4 class="font-bold text-[#FFD700]">{{name}}</h4>
          <p class="text-sm text-gray-400">{{role}}</p>
        </div>
      </div>
    </div>
  `
})
export class TestimonialComponent {
  @Input() quote: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() image: string = '';
}
