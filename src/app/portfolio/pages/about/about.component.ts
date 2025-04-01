import { Component } from '@angular/core';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AboutSectionComponent
  ],
  templateUrl: './about.component.html',
  styles: ``
})
export default class AboutComponent {

}
