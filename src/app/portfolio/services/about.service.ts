import { Injectable } from '@angular/core';
import { ToolHabilitie } from '../interfaces/tool-habilitie.interface';
import { WorkExperience } from '../interfaces/work-experience.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  public toolsList: ToolHabilitie[] = [
    {
      tool: 'JavaScript',
      level: 'intermedio',
      type: 'programming-language',
      image: 'javascript.png'
    },
    {
      tool: 'Typescript',
      level: 'intermedio',
      type: 'programming-language',
      image: 'typescript.png'
    },
    {
      tool: 'C#',
      level: 'básico',
      type: 'programming-language',
      image: 'csharp.png'
    },
    {
      tool: 'Angular',
      level: 'intermedio',
      type: 'dev',
      image: 'angular.jpg'
    },
    {
      tool: 'React',
      level: 'básico',
      type: 'dev',
      image: 'react.png'
    },
    {
      tool: 'ASP.Net Core',
      level: 'básico',
      type: 'dev',
      image: 'netcore.png'
    },
    {
      tool: 'Selenium',
      level: 'intermedio',
      type: 'qa',
      image: 'selenium.png'
    },
    {
      tool: 'Postman',
      level: 'intermedio',
      type: 'qa',
      image: 'postman.png'
    },
    {
      tool: 'JMeter',
      level: 'básico',
      type: 'qa',
      image: 'jmeter.jpg'
    },
    {
      tool: 'Cypress',
      level: 'intermedio',
      type: 'qa',
      image: 'cypress.jpg'
    },
    {
      tool: 'Cucumber',
      level: 'básico',
      type: 'qa',
      image: 'cucumber.png'
    },
    {
      tool: 'Figma',
      level: 'intermedio',
      type: 'ux',
      image: 'figma.png'
    },
    {
      tool: 'Adobe XD',
      level: 'básico',
      type: 'ux',
      image: 'adobexd.png'
    },
    {
      tool: 'Maze',
      level: 'básico',
      type: 'ux',
      image: 'maze.jpg'
    },
    {
      tool: 'Notion',
      level: 'intermedio',
      type: 'others',
      image: 'notion.png'
    },
    {
      tool: 'Trello',
      level: 'avanzado',
      type: 'others',
      image: 'trello.jpg'
    },
    {
      tool: 'Github',
      level: 'básico',
      type: 'others',
      image: 'github.png'
    },
    {
      tool: 'Canva',
      level: 'avanzado',
      type: 'others',
      image: 'canva.jpg'
    },
    {
      tool:'Jira',
      level:'básico',
      type:'others',
      image:'jira.png'
    },
    {
      tool: 'K6',
      level: 'básico',
      type: 'others',
      image: 'k6.png'
    }
  ]

  public workExperienceList: WorkExperience[] = [
    {
      image: 'viamatica.jpg',
      enterprise: 'Viamatica',
      period: 'Junio 2023 - Febrero 2024',
      tasks: [
        'Elaboración y Actualización de Manuales de Usuario.',
        'Elaboración y Creación de Documentación Técnica.',
        'Realización de pruebas manuales funcionales.'
      ]
    }
  ]
  constructor() { }

  getToolFilterList(filter: string): ToolHabilitie[]{
    if(filter){
      return this.toolsList.filter(x => x.type == filter);
    }
    return this.toolsList;
  }

  getWorkExperience(): WorkExperience[]{
    return this.workExperienceList;
  }
}
