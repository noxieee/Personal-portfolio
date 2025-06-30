import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthorTitle} from './author-title';
import {Skills} from './skills';
import {WorkExperience} from './work-experience';
import {Education} from './education';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthorTitle, Skills, WorkExperience, Education],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Portfolio';
}
