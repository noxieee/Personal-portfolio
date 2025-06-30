import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'education-tile',
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: 'education-tile.html',
  styleUrls: ['education-tile.scss', 'timeline.scss']
})

export class EducationTile {
  @Input() logoUrl = '';
  @Input() uniUrl = '';
  @Input() uniName = '';
  @Input() uniSpecialization = '';
  @Input() dateFrom = '';
  @Input() dateTo = '';
  @Input() isDone = false;
  @Input() thesisLink = '';
}
