import { Component, input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

import { ToolItemComponent } from '../tool-item/tool-item.component';
import { ToolHabilitie } from '../../interfaces/tool-habilitie.interface';


@Component({
  selector: 'app-habilities-subsection',
  standalone: true,
  imports: [
    MatIconModule,
    ToolItemComponent
  ],
  templateUrl: './habilities-subsection.component.html',
  styles: `

  `
})
export class HabilitiesSubsectionComponent {

  iconName = input<string>();
  subsectionName = input<string>();
  toolList = input<ToolHabilitie[]>();

}
