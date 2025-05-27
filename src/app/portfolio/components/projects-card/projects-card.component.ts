import { Component, input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './projects-card.component.html',
  styles: ``
})
export class ProjectsCardComponent {

  project = input<Project>();
}
