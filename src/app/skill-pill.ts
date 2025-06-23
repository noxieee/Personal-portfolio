import {RouterOutlet} from '@angular/router';
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'skill-pill',
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: 'skill-pill.html',
  styleUrl: 'skill-pill.css'
})

export class SkillPill {
  @Input() iconUrl:string = '';
  @Input() skillText:string = '';
}
