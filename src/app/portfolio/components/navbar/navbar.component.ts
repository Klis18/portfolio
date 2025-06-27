import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../shared/services/theme.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'portfolio-navbar',
  standalone: true,
  imports: [
    RouterLink,
    // RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

    public currentTheme: string | null = 'black';
    public logo: string = '';

   constructor(private themeService: ThemeService){
   }
   
   ngOnInit(): void {
    this.currentTheme = 'black';
    this.changeLogo(this.currentTheme);
   };

   changeTheme(){
    this.currentTheme = document.body.getAttribute('data-theme');
    const newTheme = this.currentTheme == 'light'? 'black' : 'light';
    this.themeService.setTheme(newTheme);
    this.changeLogo(newTheme);
   }

   changeLogo(currentTheme: string){
      this.logo = currentTheme == 'black'? '/assets/images/knlogodark.png' : '/assets/images/knlogolight.png';
      return this.logo;
   }

   scrollTo(sectionId: string, event: Event) {
    event.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
