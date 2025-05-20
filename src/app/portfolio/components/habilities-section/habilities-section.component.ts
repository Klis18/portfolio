import { Component, OnInit } from '@angular/core';
import { ToolHabilitie } from '../../interfaces/tool-habilitie.interface';
import { AboutService } from '../../services/about.service';
import { HabilitiesSubsectionComponent } from '../habilities-subsection/habilities-subsection.component';
import { TitlesComponent } from '../../../shared/components/titles/titles.component';

@Component({
  selector: 'portfolio-habilities-section',
  standalone: true,
  imports: [
    HabilitiesSubsectionComponent,
    TitlesComponent
  ],
  templateUrl: './habilities-section.component.html',
  styles: ``
})
export class HabilitiesSectionComponent implements OnInit{
  
  languageProgrammingList: ToolHabilitie[] = [];
  devToolsList: ToolHabilitie[] = [];
  qaToolsList:  ToolHabilitie[] = [];
  uxToolsList:  ToolHabilitie[] = [];
  othersTools:  ToolHabilitie[] = [];

  constructor(private aboutService: AboutService){};

  ngOnInit(): void {
    this.languageProgrammingList = this.aboutService.getToolFilterList('programming-language');
    this.devToolsList = this.aboutService.getToolFilterList('dev');
    this.qaToolsList  = this.aboutService.getToolFilterList('qa');
    this.uxToolsList  = this.aboutService.getToolFilterList('ux');
    this.othersTools  = this.aboutService.getToolFilterList('others');
  }
}
