import { Component, input } from '@angular/core';
import { ToolHabilitie } from '../../interfaces/tool-habilitie.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tool-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tool-item.component.html',
  styles: `
    .progress-background{
      background-color: rgba(226, 169, 194, 0.4);
    }
  `
})
export class ToolItemComponent {

  tools = input.required<ToolHabilitie>();
}
