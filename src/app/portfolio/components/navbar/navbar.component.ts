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

    public currentTheme: string | null = '';

   constructor(private themeService: ThemeService){}
   
   ngOnInit(): void {
    this.currentTheme = 'light';
   };

   changeTheme(){
    this.currentTheme = document.body.getAttribute('data-theme');
    const newTheme = this.currentTheme == 'light'? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
   }

}
