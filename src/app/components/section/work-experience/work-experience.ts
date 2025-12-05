import { Component, Input } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import { ExperienceConfig } from '../../../models/experience/experience.model';

@Component({
  selector: 'app-work-experience',
  imports: [SectionTitle],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss',
})
export class WorkExperience {
  @Input() experienceData!: ExperienceConfig;
}
