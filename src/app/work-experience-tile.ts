import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'work-experience-tile',
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: 'work-experience-tile.html',
  styleUrls: ['work-experience-tile.scss', 'timeline.scss']
})

export class WorkExperienceTile {
  @Input() logoUrl = '';
  @Input() jobTitle = '';
  @Input() companyName = '';
  @Input() companyUrl = '';
  @Input() dateFrom = '';
  @Input() dateTo = '';
}
