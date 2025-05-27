export interface Project{
    image: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    linkVideo: string;
    linkApp: string;
    linkBack: string;
    linkFront: string;
    linkUx: string;
    state: ProjectState;
}

export enum ProjectState{
    Pendiente = 'Pendiente',
    Process = 'En Proceso',
    Complete = 'Finalizado',
}
