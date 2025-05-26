import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { AboutSectionComponent } from "../../components/about-section/about-section.component";
import { HabilitiesSectionComponent } from "../../components/habilities-section/habilities-section.component";

@Component({
  selector: 'app-kn-portfolio',
  standalone: true,
  imports: [
    NavbarComponent,
    AboutSectionComponent,
    HabilitiesSectionComponent
],
  templateUrl: './kn-portfolio.component.html',
  styleUrl: './kn-portfolio.component.css'
})
export default class KnPortfolioComponent {

}
