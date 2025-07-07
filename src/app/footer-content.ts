import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'footer-content',
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: 'footer-content.html',
  styleUrl: 'footer-content.css'
})

export class FooterContent {

}
