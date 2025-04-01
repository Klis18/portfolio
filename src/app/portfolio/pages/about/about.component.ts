import { Component } from '@angular/core';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { HabilitiesSectionComponent } from '../../components/habilities-section/habilities-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AboutSectionComponent,
    HabilitiesSectionComponent
  ],
  templateUrl: './about.component.html',
  styles: ``
})
export default class AboutComponent {

}
