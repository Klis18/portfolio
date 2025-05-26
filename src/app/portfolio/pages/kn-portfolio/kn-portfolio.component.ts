import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { AboutSectionComponent } from "../../components/about-section/about-section.component";
import { HabilitiesSectionComponent } from "../../components/habilities-section/habilities-section.component";
import { EducationSectionComponent } from "../../components/education-section/education-section.component";
import { WorkExperienceSectionComponent } from "../../components/work-experience-section/work-experience-section.component";
import { ContactSectionComponent } from "../../components/contact-section/contact-section.component";

@Component({
  selector: 'app-kn-portfolio',
  standalone: true,
  imports: [
    NavbarComponent,
    AboutSectionComponent,
    HabilitiesSectionComponent,
    EducationSectionComponent,
    WorkExperienceSectionComponent,
    ContactSectionComponent
],
  templateUrl: './kn-portfolio.component.html',
  styleUrl: './kn-portfolio.component.css'
})
export default class KnPortfolioComponent {

}
