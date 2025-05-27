import { Component } from '@angular/core';
import { EducationTimelineComponent } from '../education-timeline/education-timeline.component';
import { TitlesComponent } from '../../../shared/components/titles/titles.component';


@Component({
  selector: 'portfolio-education-section',
  standalone: true,
  imports: [
    TitlesComponent,
    EducationTimelineComponent
],
  templateUrl: './education-section.component.html',
  styles: ``
})
export class EducationSectionComponent {

}
