import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: "custom-button",
  imports: [RouterOutlet, NgClass],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})

export class Button {
  @Input() iconLeft: string = '';
  @Input() iconRight: string = '';
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() type: string = '';
  @Input() target: string = '';
  @Input() filename: string = '';
}

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}
