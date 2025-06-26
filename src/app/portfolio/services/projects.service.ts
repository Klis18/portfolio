import { Injectable } from '@angular/core';
import { Project, ProjectState } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public projectsList: Project[] = [
    {
      image: '/assets/images/logo-projects/swaglabs.jpg',
      title: 'Swaglabs',
      subtitle: '',
      description: 'Automatización de casos de prueba en página Swaglabs',
      tags: ['QA Automation', 'Selenium', 'Java'],
      linkVideo: '',
      linkApp: '',
      linkBack: '',
      linkFront: '',
      linkUx: '',
      state: ProjectState.Complete
    },
        {
      image: '/assets/images/logo-projects/orangehrm.png',
      title: 'Orange HRM',
      subtitle: '',
      description: 'Automatización de casos de prueba en página Orange HRM',
      tags: ['QA Automation', 'Cypress', 'JavaScript'],
      linkVideo: '',
      linkApp: '',
      linkBack: '',
      linkFront: '',
      linkUx: '',
      state: ProjectState.Process
    },
    {
      image: '/assets/images/logo-projects/focusfly.png',
      title: 'FocusFly',
      subtitle: 'Aplicación de Gestión del tiempo para freelancers',
      description: '',
      tags: ['Angular', '.Net'],
      linkVideo: '',
      linkApp: '',
      linkBack: '',
      linkFront: '',
      linkUx: '',
      state: ProjectState.Process,
    },
    {
      image: '/assets/images/logo-projects/smartrecall.png',
      title: 'SmartRecall',
      subtitle: 'Aplicación web para estudiar de manera inteligente.',
      description: '',
      tags: ['Angular', '.Net'],
      linkVideo: '',
      linkApp: '',
      linkBack: '',
      linkFront: '',
      linkUx: '',
      state: ProjectState.Pendiente
    },
    {
      image: '/assets/images/logo-projects/shoppinglis.png',
      title: 'ShoppingLis',
      subtitle: 'Ecommerce de ropa.',
      description: '',
      tags: ['Angular', '.Net'],
      linkVideo: '',
      linkApp: '',
      linkBack: '',
      linkFront: '',
      linkUx: '',
      state: ProjectState.Pendiente
    },
    {
      image: '/assets/images/logo-projects/dolomedix.png',
      title: 'Dolomedix',
      subtitle: 'Aplicación de agendamiento de citas médicas.',
      description: '',
      tags: ['Angular', '.Net'],
      linkVideo: '',
      linkApp: '',
      linkBack: '',
      linkFront: '',
      linkUx: '',
      state: ProjectState.Pendiente
    }
  ]
  constructor() { }

  getProjectsList(){
    return this.projectsList;
  }
}
