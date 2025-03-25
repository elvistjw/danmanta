import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent {
  @Input() title: string = '';  // Recebe o título do card
  @Input() description: string = '';  // Recebe a descrição do card
  @Input() image: string = '';  // Recebe a imagem do card
  @Input() instagram: string = '';  // Recebe o link do Instagram
  @Input() nomeInstagram: string = ''; // Recebe o @ do Instagram
}
