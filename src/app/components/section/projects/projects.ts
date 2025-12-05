import { Component, Input } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import { ProjectsConfig } from '../../../models/projects/projects.model';

@Component({
  selector: 'app-projects',
  imports: [SectionTitle],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  @Input() projectsData!: ProjectsConfig;
}
