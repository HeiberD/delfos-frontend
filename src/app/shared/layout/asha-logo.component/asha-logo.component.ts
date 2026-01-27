import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asha-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asha-logo.component.html',
  styleUrls: ['./asha-logo.component.css']
})
export class AshaLogoComponent {
  /**
   * TIPO DE VISUALIZACIÓN:
   * 'icon': Solo la "A" cuneiforme (ideal para móviles o favicons).
   * 'logo': La "A" + "SHA" en horizontal (ideal para el Header).
   * 'brand': La "A" + "ASHA" + Slogan en vertical (ideal para Login o Footer).
   */
  @Input() type: 'icon' | 'logo' | 'brand' = 'logo'; // Por defecto será 'logo'

  /**
   * TEMA DE COLOR:
   * 'light': Azules oscuros y corporativos (para fondo blanco).
   * 'dark': Dorados y blancos (para fondo oscuro).
   * Esto se conectará más adelante con tu servicio de temas global.
   */
  @Input() theme: 'light' | 'dark' = 'light'; // Por defecto 'light'
}