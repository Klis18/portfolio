import { Component, OnInit } from '@angular/core';
import { TitlesComponent } from "../../../shared/components/titles/titles.component";
import { ProjectsService } from '../../services/projects.service';
import { ProjectsCardComponent } from "../projects-card/projects-card.component";
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'portfolio-projects-section',
  standalone: true,
  imports: [TitlesComponent, ProjectsCardComponent],
  templateUrl: './projects-section.component.html',
  styles: ``
})
export class ProjectsSectionComponent implements OnInit{

  public projectList: Project[] = [] 

  constructor(private projectsService: ProjectsService){}

  ngOnInit(): void {
    this.projectList = this.projectsService.getProjectsList();
  }

}
