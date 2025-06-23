import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthorTitle} from './author-title';
import {Skills} from './skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthorTitle, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Portfolio';
}
