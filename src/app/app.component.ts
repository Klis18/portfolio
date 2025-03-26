import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'kn-portfolio';

  constructor(private themeService: ThemeService){};

  ngOnInit(): void {
    const savedTheme = this.themeService.getTheme();
    this.themeService.setTheme(savedTheme);
  }
}
