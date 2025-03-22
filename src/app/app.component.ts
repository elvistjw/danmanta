// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importando CommonModule
import { TestimonialComponent } from './testimonial.component';  // Importando TestimonialComponent standalone
import { ServiceCardComponent } from './service-card.component';  // Importando ServiceCardComponent standalone
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,  // Definindo o AppComponent como standalone
  imports: [CommonModule, TestimonialComponent, ServiceCardComponent],  // Importando os componentes standalone diretamente
  template: `
    <header class="min-h-screen relative bg-black">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
      <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7" 
           class="absolute inset-0 w-full h-full object-cover opacity-50" 
           alt="Artist performing">
      <div class="relative z-20 container mx-auto px-4 pt-32">
        <h1 class="text-6xl font-bold mb-6 fade-in">
          Transforme sua <span class="text-[#FFD700]">Carreira Artística</span>
        </h1>
        <p class="text-xl mb-8 max-w-2xl fade-in">
          Assessoria especializada para artistas e influenciadores que buscam 
          excelência e reconhecimento no mercado.
        </p>
        <button class="btn-primary fade-in" (click)="abrirWhatsApp()">
          Agende uma Consulta
        </button>
      </div>
    </header>

    <section class="py-20 bg-black" id="about">
      <div class="container mx-auto px-4">
        <h2 class="section-title">Sobre Nós</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-lg mb-6">
              Somos especialistas em transformar talentos em marcas de sucesso. 
              Nossa assessoria combina experiência no mercado artístico com 
              estratégias inovadoras de marketing e gestão de carreira.
            </p>
            <p class="text-lg">
              Com um histórico comprovado de sucesso, ajudamos artistas e 
              influenciadores a alcançarem seu máximo potencial.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-900 p-6 rounded-lg text-center">
              <h3 class="text-[#FFD700] text-4xl font-bold">150+</h3>
              <p>Artistas Assessorados</p>
            </div>
            <div class="bg-gray-900 p-6 rounded-lg text-center">
              <h3 class="text-[#FFD700] text-4xl font-bold">10+</h3>
              <p>Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-900" id="services">
      <div class="container mx-auto px-4">
        <h2 class="section-title">Nossos Serviços</h2>
        <div class="grid md:grid-cols-3 gap-8">
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
      <div class="container mx-auto px-4">
        <h2 class="section-title">Depoimentos</h2>
        <div class="grid md:grid-cols-2 gap-8">
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
        <p class="text-xl mb-8">
          Estamos prontos para elevar sua carreira ao próximo nível
        </p>
        <a href="https://wa.me/+5581993513772" 
           class="btn-primary inline-block" target="_blank">
          Fale Conosco pelo WhatsApp
        </a>
      </div>
    </section>

    <footer class="py-8 bg-black border-t border-gray-800">
      <div class="container mx-auto px-4 text-center text-gray-400">
        <p>© 2025 Dan Manta Assessoria Artística e Pessoal. Todos os direitos reservados.</p>
      </div>
    </footer>
  `
})
export class App {
  constructor() {}

  abrirWhatsApp() {
    const phoneNumber = '+5581993513772';
    const message = 'Olá, gostaria de saber mais sobre seus serviços!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  }
}

bootstrapApplication(App);
