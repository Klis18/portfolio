import { Injectable } from '@angular/core';
import { Project, ProjectState } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public projectsList: Project[] = [
    {
      image: '/assets/images/logo-projects/p-swaglabs.png',
      title: 'Swaglabs',
      subtitle: 'Automatización de casos de prueba en página Swaglabs',
      description: '',
      tags: ['QA Automation', 'Selenium', 'Java'],
      linkVideo: '',
      linkApp: '',
      linkBack: '',
      linkFront: '',
      linkUx: '',
      state: ProjectState.Complete
    },
        {
      image: '/assets/images/logo-projects/p-orangehrm.png',
      title: 'Orange HRM',
      subtitle: 'Automatización de casos de prueba en página Orange HRM',
      description: '',
      tags: ['QA Automation', 'Cypress', 'JavaScript'],
      linkVideo: '',
      linkApp: '',
      linkBack: '',
      linkFront: '',
      linkUx: '',
      state: ProjectState.Process
    },
    {
      image: '/assets/images/logo-projects/p-focusfly.png',
      title: 'FocusFly',
      subtitle: 'Aplicación de Gestión del tiempo para freelancers',
      description: '',
      tags: ['Angular', '.Net', 'FullStack'],
      linkVideo: '',
      linkApp: '',
      linkBack: '',
      linkFront: '',
      linkUx: '',
      state: ProjectState.Process,
    },
    {
      image: '/assets/images/logo-projects/p-smartrecall.png',
      title: 'SmartRecall',
      subtitle: 'Aplicación web para estudiar de manera inteligente.',
      description: '',
      tags: ['Angular', '.Net', 'FullStack'],
      linkVideo: '',
      linkApp: '',
      linkBack: '',
      linkFront: '',
      linkUx: '',
      state: ProjectState.Pendiente
    },
    {
      image: '/assets/images/logo-projects/p-shoppinglis.png',
      title: 'ShoppingLis',
      subtitle: 'Ecommerce de ropa.',
      description: '',
      tags: ['React', '.Net', 'FullStack'],
      linkVideo: '',
      linkApp: '',
      linkBack: '',
      linkFront: '',
      linkUx: '',
      state: ProjectState.Pendiente
    },
    {
      image: '/assets/images/logo-projects/p-dolomedix.png',
      title: 'Dolomedix',
      subtitle: 'Aplicación de agendamiento de citas médicas.',
      description: '',
      tags: ['React', '.Net', 'FullStack'],
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
