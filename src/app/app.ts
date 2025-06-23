import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthorTitle} from './author-title';
import {SkillPill} from './skill-pill';
import {Skills} from './skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthorTitle, SkillPill, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Portfolio';
}
