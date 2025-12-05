import { Component, Input } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import { AboutConfig } from '../../../models/about/about.model';

@Component({
  selector: 'app-about',
  imports: [SectionTitle],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  @Input() aboutData!: AboutConfig;
}
