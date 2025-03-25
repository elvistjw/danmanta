// src/app/testimonial.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,  // Componente standalone
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  @Input() quote: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() image: string = '';
}
