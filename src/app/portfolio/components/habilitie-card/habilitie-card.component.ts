import { Component, input, OnInit } from '@angular/core';
import { Habilitie } from '../../interfaces/habilitie.interface';

@Component({
  selector: 'portfolio-habilitie-card',
  standalone: true,
  imports: [],
  templateUrl: './habilitie-card.component.html',
  styles: ``
})
export class HabilitieCardComponent implements OnInit{
  
  habilitieData = input.required<Habilitie>();

  ngOnInit(): void {
    console.log('Habilities', this.habilitieData().habilities)
  }


}
