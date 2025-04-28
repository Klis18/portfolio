import { Component } from '@angular/core';
import { EducationTimelineComponent } from '../education-timeline/education-timeline.component';

@Component({
  selector: 'portfolio-education-section',
  standalone: true,
  imports: [
    EducationTimelineComponent
  ],
  templateUrl: './education-section.component.html',
  styles: ``
})
export class EducationSectionComponent {

}
