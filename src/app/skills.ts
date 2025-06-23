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
  protected skillTexts = ["UX/UI", "Accessibility", "HTML5", "SCSS", "Git", "JS", "TS", "Angular", "English C1"];
  protected skillsIconsUrls = ["figma.svg", "accessibility.svg", "html5.svg", "sass.svg", "git.svg", "js.svg", "ts.svg", "angular.svg", "language.svg"];
}
