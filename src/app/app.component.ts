// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importando CommonModule
import { TestimonialComponent } from './testimonial/testimonial.component';  // Importando TestimonialComponent standalone
import { ServiceCardComponent } from './service-card/service-card.component';  // Importando ServiceCardComponent standalone
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,  // Definindo o AppComponent como standalone
  imports: [CommonModule, TestimonialComponent, ServiceCardComponent, FeatureCardComponent],  // Importando os componentes standalone diretamente
  styleUrls: ['./app.component.scss'],
  template: `
  <header class="relative bg-black flex flex-col items-center text-center px-4 sm:px-8 h-[70vh] sm:h-screen">
  <!-- Logo -->
  <div class="relative w-full flex justify-center">
    <img id="imagem" class="logo w-40 sm:w-60 object-contain" src="assets/logo.png" alt="Logo">
  </div>

  <!-- Texto e Botão -->
  <div class="relative z-20 container mx-auto max-w-3xl mt-8 sm:mt-16">
    <h1 class="text-3xl sm:text-6xl font-bold mb-4 fade-in">
      Transforme sua <span class="text-[#FFF]">Carreira Artística</span>
    </h1>
    <p class="text-lg sm:text-xl mb-6 fade-in">
      Assessoria especializada para artistas e influenciadores que buscam 
      excelência e reconhecimento no mercado.
    </p>
    <a href="https://wa.me/+5581993513772" 
       class="btn-primary inline-block fade-in" target="_blank">
      Agende uma Consulta
    </a>
  </div>
</header>

<section class="py-20 bg-gray-900 relative" id="services">
      <div class="container mx-auto px-4 text-center">
        <h2 class="section-title">Nossos Acessorados</h2>

        <!-- Cards de Acessorados -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
          <app-feature-card 
            *ngFor="let card of currentCards"
            [title]="card.title" 
            [description]="card.description"
            [image]="card.image"
            [instagram]="card.instagram"
            [nomeInstagram]="card.nomeInstagram">
          </app-feature-card>
        </div>

        <!-- Setas de Navegação -->
        <div class="absolute top-1/2 left-0 transform -translate-y-1/2 ml-4">
          <button class="text-white text-4xl" (click)="previous()">&lt;</button>
        </div>
        <div class="absolute top-1/2 right-0 transform -translate-y-1/2 mr-4">
          <button class="text-white text-4xl" (click)="next()">&gt;</button>
        </div>
      </div>
    </section>



<section class="py-20 bg-black" id="about">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Sobre Nós</h2> <!-- Centralizando o título -->
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="text-left"> <!-- Alinhando o texto à esquerda -->
        <p class="text-lg mb-6">
          Somos especialistas em transformar talentos em marcas de sucesso.
          Nossa assessoria combina experiência no mercado artístico com estratégias inovadoras de marketing e gestão de carreira.
        </p>
        <p class="text-lg">
          Com um histórico comprovado de sucesso, ajudamos artistas e influenciadores a alcançarem seu máximo potencial.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-gray-900 p-6 rounded-lg text-center">
          <h3 class="text-[#FFF] text-4xl font-bold">150+</h3>
          <p>Artistas Assessorados</p>
        </div>
        <div class="bg-gray-900 p-6 rounded-lg text-center">
          <h3 class="text-[#FFF] text-4xl font-bold">10+</h3>
          <p>Anos de Experiência</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-20 bg-gray-900" id="services">
  <div class="container mx-auto px-4 text-center">
    <h2 class="section-title">Nossos Serviços</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <app-service-card 
        [title]="'Gestão de Imagem'" 
        [description]="'Desenvolvimento e manutenção de uma imagem profissional e autêntica'">
      </app-service-card>
      <app-service-card 
        [title]="'Marketing Digital'" 
        [description]="'Estratégias personalizadas para crescimento nas redes sociais'">
      </app-service-card>
      <app-service-card 
        [title]="'Networking'" 
        [description]="'Conexões estratégicas com profissionais e marcas do setor'">
      </app-service-card>
    </div>
  </div>
</section>

<section class="py-20 bg-black" id="testimonials">
  <div class="container mx-auto px-4 text-center">
    <h2 class="section-title">Depoimentos</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <app-testimonial
        [quote]="'A assessoria transformou completamente minha carreira. O profissionalismo e dedicação da equipe são incomparáveis.'"
        [name]="'Maria Silva'"
        [role]="'Cantora'"
        [image]="'https://images.unsplash.com/photo-1494790108377-be9c29b29330'">
      </app-testimonial>
      <app-testimonial
        [quote]="'Em apenas 6 meses, vi resultados impressionantes. Minha base de seguidores triplicou e as oportunidades não param de surgir.'"
        [name]="'João Santos'"
        [role]="'Influenciador Digital'"
        [image]="'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'">
      </app-testimonial>
    </div>
  </div>
</section>

<section class="py-20 bg-gray-900" id="contact">
  <div class="container mx-auto px-4 text-center">
    <h2 class="section-title">Comece Sua Transformação</h2>
    <p class="text-lg sm:text-xl mb-8">
      Estamos prontos para elevar sua carreira ao próximo nível
    </p>
    <a href="https://wa.me/+5581993513772" 
       class="btn-primary inline-block" target="_blank">
      Fale Conosco pelo WhatsApp
    </a>
  </div>
</section>

<footer class="py-8 bg-black border-t border-gray-800 text-center text-gray-400">
  <p>© 2025 Dan Manta Assessoria Artística e Pessoal. Todos os direitos reservados.</p>
</footer>
  `
})
export class App {
  currentIndex: number = 0;

  cards = [
    { title: 'Neiff', description: 'Ifluencer', image: 'assets/oneiff.png', instagram: 'https://instagram.com/oneiff', nomeInstagram: '@oneiff' },
    { title: 'Robinho', description: 'Cantor', image: 'assets/eorobinhoo.png', instagram: 'https://instagram.com/eorobinhoo_', nomeInstagram: '@eorobinhoo_' },
    { title: 'Joãozinho', description: 'Ifluencer', image: 'assets/joaozinhoo_ofcl.png', instagram: 'https://instagram.com/joaozinhoo_ofcl', nomeInstagram: '@joaozinhoo_ofcl' },
    { title: 'Arthurzinho', description: 'Artista', image: 'assets/arthurzinhobatedeira.png', instagram: 'https://instagram.com/arthurzinhobatedeira', nomeInstagram: '@arthurzinhobatedeira' },
    { title: 'Neguin da Base', description: 'Ifluencer', image: 'assets/neguindaabase.png', instagram: 'https://instagram.com/neguindaabase', nomeInstagram: '@neguindaabase' },
    { title: 'Pedrinho Do Recife', description: 'Ifluencer', image: 'assets/pedrinhodorecifeoficial.png', instagram: 'https://instagram.com/pedrinhodorecifeoficial', nomeInstagram: '@pedrinhodorecifeoficial' },
    { title: 'Bernardo Neiff', description: 'Ifluencer', image: 'assets/bernardoneiff.png', instagram: 'https://instagram.com/bernardoneiff', nomeInstagram: '@bernardoneiff' },
    { title: 'Bea Neiff', description: 'Ifluencer', image: 'assets/beaneiff.png', instagram: 'https://instagram.com/beaneiff', nomeInstagram: '@beaneiff' },
    { title: 'Natalia Rabbii', description: 'Ifluencer', image: 'assets/nataliarabbii.png', instagram: 'https://instagram.com/nataliarabbii', nomeInstagram: '@nataliarabbii' },
    { title: 'Eu Dudao', description: 'Ifluencer', image: 'assets/eududao5.png', instagram: 'https://instagram.com/eududao5', nomeInstagram: '@eududao5' },
    { title: 'Eu Day Lane Santos', description: 'Ifluencer', image: 'assets/eudaylanesantos_.png', instagram: 'https://instagram.com/eudaylanesantos_', nomeInstagram: '@eudaylanesantos_' },
    { title: 'Karol Digital', description: 'Ifluencer', image: 'assets/karoldigital_.png', instagram: 'https://instagram.com/karoldigital_', nomeInstagram: '@karoldigital_' },
  ];
  constructor() {}

  
  get currentCards() {
    return [this.cards[this.currentIndex], this.cards[(this.currentIndex + 1) % this.cards.length], this.cards[(this.currentIndex + 2) % this.cards.length]];
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length; // Faz o loop para o início
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length; // Vai para o card anterior com loop
  }

  abrirWhatsApp() {
    const phoneNumber = '+5581993513772';
    const message = 'Olá, gostaria de saber mais sobre seus serviços!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  }
}

bootstrapApplication(App);
