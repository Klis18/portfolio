import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TitlesComponent } from "../../../shared/components/titles/titles.component";
import { ProjectsService } from '../../services/projects.service';
import { ProjectsCardComponent } from "../projects-card/projects-card.component";
import { Project } from '../../interfaces/project.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'portfolio-projects-section',
  standalone: true,
  imports: [CommonModule,TitlesComponent, ProjectsCardComponent],
  templateUrl: './projects-section.component.html',
  styles: ``
})
export class ProjectsSectionComponent implements OnInit{

  public projectList: Project[] = [] 

  constructor(private projectsService: ProjectsService){}

  ngOnInit(): void {
    this.projectList = this.projectsService.getProjectsList();
  }

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  cards = [
    { title: 'Card 1', content: 'Contenido de la tarjeta 1' },
    { title: 'Card 2', content: 'Contenido de la tarjeta 2' },
    { title: 'Card 3', content: 'Contenido de la tarjeta 3' },
    { title: 'Card 4', content: 'Contenido de la tarjeta 4' },
    { title: 'Card 5', content: 'Contenido de la tarjeta 5' },
  ];

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
