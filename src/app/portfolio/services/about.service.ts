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
      percentKnoledge: '40%',
      level: 'medio-bajo',
      type: 'programming-language',
      image: 'javascript.png'
    },
    {
      tool: 'Typescript',
      percentKnoledge: '50%',
      level: 'medio',
      type: 'programming-language',
      image: 'typescript.png'
    },
    {
      tool: 'C#',
      percentKnoledge: '30%',
      level: 'medio-bajo',
      type: 'programming-language',
      image: 'csharp.png'
    },
    {
      tool: 'Angular',
      percentKnoledge: '50%',
      level: 'medio',
      type: 'dev',
      image: 'angular.jpg'
    },
    {
      tool: 'React',
      percentKnoledge: '10%',
      level: 'básico',
      type: 'dev',
      image: 'react.png'
    },
    {
      tool: 'ASP.Net Core',
      percentKnoledge: '30%',
      level: 'medio-bajo',
      type: 'dev',
      image: 'netcore.png'
    },
    {
      tool: 'Selenium',
      percentKnoledge: '50%',
      level: 'medio',
      type: 'qa',
      image: 'selenium.png'
    },
    {
      tool: 'Postman',
      percentKnoledge: '70%',
      level: 'medio-alto',
      type: 'qa',
      image: 'postman.png'
    },
    {
      tool: 'JMeter',
      percentKnoledge: '25%',
      level: 'medio-bajo',
      type: 'qa',
      image: 'jmeter.jpg'
    },
    {
      tool: 'Cypress',
      percentKnoledge: '25%',
      level: 'medio-bajo',
      type: 'qa',
      image: 'cypress.jpg'
    },
    {
      tool: 'Cucumber',
      percentKnoledge: '0%',
      level: 'bajo',
      type: 'qa',
      image: 'cucumber.png'
    },
    {
      tool: 'Figma',
      percentKnoledge: '70%',
      level: 'medio-alto',
      type: 'ux',
      image: 'figma.png'
    },
    {
      tool: 'Adobe XD',
      percentKnoledge: '30%',
      level: 'medio-bajo',
      type: 'ux',
      image: 'adobexd.png'
    },
    {
      tool: 'Maze',
      percentKnoledge: '30%',
      level: 'medio-bajo',
      type: 'ux',
      image: 'maze.jpg'
    },
    {
      tool: 'Notion',
      percentKnoledge: '90%',
      level: 'medio-alto',
      type: 'others',
      image: 'notion.png'
    },
    {
      tool: 'Trello',
      percentKnoledge: '70%',
      level: 'medio-alto',
      type: 'others',
      image: 'trello.jpg'
    },
    {
      tool: 'Github',
      percentKnoledge: '30%',
      level: 'medio-bajo',
      type: 'others',
      image: 'github.png'
    },
    {
      tool: 'Canva',
      percentKnoledge: '80%',
      level: 'medio-alto',
      type: 'others',
      image: 'canva.jpg'
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
    return this.toolsList.filter(x => x.type == filter);
  }

  getWorkExperience(): WorkExperience[]{
    return this.workExperienceList;
  }
}
