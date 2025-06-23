import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'work-experience-tile',
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: 'work-experience-tile.html',
  styleUrl: 'work-experience-tile.scss'
})

export class WorkExperienceTile {
  @Input() logoUrl = '';
  @Input() jobTitle = '';
  @Input() companyName = '';
  @Input() dateFrom = '';
  @Input() dateTo = '';
}
