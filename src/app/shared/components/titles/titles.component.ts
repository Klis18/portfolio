import { Component, input } from '@angular/core';

@Component({
  selector: 'shared-titles',
  standalone: true,
  imports: [],
  templateUrl: './titles.component.html',
  styles: ``
})
export class TitlesComponent {

  sectionTitle = input<string>();

}
