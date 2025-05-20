import { Component, OnInit } from '@angular/core';
import { TitlesComponent } from '../../../shared/components/titles/titles.component';
import { WorkExperience } from '../../interfaces/work-experience.interface';
import { AboutService } from '../../services/about.service';
import { WorkCardComponent } from '../work-card/work-card.component';

@Component({
  selector: 'portfolio-work-experience-section',
  standalone: true,
  imports: [
    TitlesComponent,
    WorkCardComponent
  ],
  templateUrl: './work-experience-section.component.html',
  styles: ``
})
export class WorkExperienceSectionComponent implements OnInit{

  workExperienceList: WorkExperience[] = [];

  constructor(private aboutService: AboutService){}

  ngOnInit(): void {
    this.workExperienceList = this.aboutService.getWorkExperience();
  }

}
