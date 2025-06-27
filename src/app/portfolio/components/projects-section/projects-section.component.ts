import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TitlesComponent } from "../../../shared/components/titles/titles.component";
import { ProjectsService } from '../../services/projects.service';
import { ProjectsCardComponent } from "../projects-card/projects-card.component";
import { Project } from '../../interfaces/project.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'portfolio-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectsCardComponent],
  templateUrl: './projects-section.component.html',
  styles: ``
})
export class ProjectsSectionComponent implements OnInit{

  public projectList: Project[] = [] 

  constructor(private projectsService: ProjectsService){}

  ngOnInit(): void {
    this.filterProjects('');
    this.startAutoScroll();
  }

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  filterProjects(filter:string){
    this.projectList = this.projectsService.getProjectsFiltered(filter);
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  startAutoScroll() {
      setInterval(() => {
        const container = this.scrollContainer.nativeElement;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }, 3000);
  }
}
