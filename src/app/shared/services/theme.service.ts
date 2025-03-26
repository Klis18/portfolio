import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {}

  setTheme(theme: string): void {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  getTheme(): string {
    return localStorage.getItem('theme') || 'light';
  }
}
