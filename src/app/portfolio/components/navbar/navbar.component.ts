import { Component } from '@angular/core';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'portfolio-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

   changeThemeButton = document.getElementById('changeThemeButton');
   app = document.getElementById('daisyTheme');

   constructor(private themeService: ThemeService){};

   changeTheme(){
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme == 'light'? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
   }

}
