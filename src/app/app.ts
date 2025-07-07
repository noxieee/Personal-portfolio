import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthorTitle} from './author-title';
import {Skills} from './skills';
import {WorkExperience} from './work-experience';
import {Education} from './education';
import {FooterContent} from './footer-content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthorTitle, Skills, WorkExperience, Education, FooterContent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Portfolio';
}
