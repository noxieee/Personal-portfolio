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
  protected skills = [
    ["UX/UI", "figma.svg"],
    ["Přístupnost", "accessibility.svg"],
    ["HTML5", "html5.svg"],
    ["SCSS", "sass.svg"],
    ["Git", "git.svg"],
    ["JS", "js.svg"],
    ["TS", "ts.svg"],
    ["Angular", "angular.svg"],
    ["Angličtina C1", "language.svg"]
  ]
}
