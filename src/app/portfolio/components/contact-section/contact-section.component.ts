import { Component } from '@angular/core';
import { TitlesComponent } from "../../../shared/components/titles/titles.component";

@Component({
  selector: 'portfolio-contact-section',
  standalone: true,
  imports: [TitlesComponent],
  templateUrl: './contact-section.component.html',
  styles: ``
})
export class ContactSectionComponent {

  correo = 'kenianieves18@hotmail.com'
}
