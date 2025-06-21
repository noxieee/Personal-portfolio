import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from './button';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'author-title',
  imports: [RouterOutlet, Button, NgOptimizedImage],
  templateUrl: './author-title.html',
  styleUrl: './author-title.scss'
})

export class AuthorTitle {
  protected authorName = "Vojtěch Keder";
  protected positions = "UX designer | Frontend Developer";
}
