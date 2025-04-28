import { Component } from '@angular/core';
import { Habilitie } from '../../interfaces/habilitie.interface';
import { HabilitieCardComponent } from '../habilitie-card/habilitie-card.component';

@Component({
  selector: 'portfolio-habilities-section',
  standalone: true,
  imports: [
    HabilitieCardComponent
  ],
  templateUrl: './habilities-section.component.html',
  styles: ``
})
export class HabilitiesSectionComponent {

  habilitiesList: Habilitie[] = [
    {
      title: 'Desarrollo',
      habilities: [
        'Desarrollo de Front-End mediante el uso de HTML, CSS, Angular,Bootstrap, Tailwind.',
        'Desarrollo de API REST con ASP.NET Core.',
        'Conocimientos básicos en: Java, JavaScript, C# y SQL Server.'
      ]
    },
    {
      title: 'QA Automation',
      habilities: [
        'Creación y actualización de plan de pruebas',
        'Conocimientos básicos en herramientas de testing como Selenium, JMeter y Postman'
      ]
    },
    {
      title: 'UX/UI',
      habilities: [
        ' Creación de prototipos mediante el uso de Figma y Adobe XD.',
        ' Realización de test de usabilidad en prototipos mediante el uso de la herramienta Maze.'
      ]
    }
  ]

}
