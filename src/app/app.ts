import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthorTitle} from './author-title';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthorTitle],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Portfolio';
}
