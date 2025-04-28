import { Component } from '@angular/core';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { HabilitiesSectionComponent } from '../../components/habilities-section/habilities-section.component';
import { EducationSectionComponent } from '../../components/education-section/education-section.component';
import { WorkExperienceSectionComponent } from '../../components/work-experience-section/work-experience-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AboutSectionComponent,
    HabilitiesSectionComponent,
    EducationSectionComponent,
    WorkExperienceSectionComponent
  ],
  templateUrl: './about.component.html',
  styles: ``
})
export default class AboutComponent {

}
