import { Component, Input } from '@angular/core';
import { DisplayConfig } from '../../../models/display/display.model';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.html',
  styleUrl: './display.scss',
})
export class Display {
  @Input() displayData!: DisplayConfig;
}
