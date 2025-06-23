import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthorTitle} from './author-title';
import {Skills} from './skills';
import {WorkExperience} from './work-experience';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthorTitle, Skills, WorkExperience],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Portfolio';
}
