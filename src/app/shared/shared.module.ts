import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  // Não exporte os componentes standalone aqui.
  // Exportação não é necessária para standalone components.
})
export class SharedModule { }
