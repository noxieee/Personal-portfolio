import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SkillPill} from './skill-pill';

@Component({
  selector: 'skills',
  imports: [RouterOutlet, SkillPill],
  templateUrl: 'skills.html',
  styleUrl: 'skills.css'
})

export class Skills {

}
