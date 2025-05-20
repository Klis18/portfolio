import { Component, input } from '@angular/core';
import { WorkExperience } from '../../interfaces/work-experience.interface';

@Component({
  selector: 'portfolio-work-card',
  standalone: true,
  imports: [],
  templateUrl: './work-card.component.html',
  styles: ``
})
export class WorkCardComponent {

  workExperience = input.required<WorkExperience>();
}
