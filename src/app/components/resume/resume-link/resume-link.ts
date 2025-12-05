import { Component, Input } from '@angular/core';
import { ResumeLinkConfig } from '../../../models/resume-link/resume-link.model';

@Component({
  selector: 'app-resume-link',
  imports: [],
  templateUrl: './resume-link.html',
  styleUrl: './resume-link.scss',
})
export class ResumeLink {
  @Input() resumeLinkData!: ResumeLinkConfig;
}
