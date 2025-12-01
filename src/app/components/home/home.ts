import { Component } from '@angular/core';
import { MainLayout } from '../layout/main-layout/main-layout';
import { HeaderLayout } from '../layout/header-layout/header-layout';
import { ContentLayout } from '../layout/content-layout/content-layout';
import { Display } from '../section/display/display';
import { Navigation } from '../navigation/navigation';
import { WorkExperience } from '../section/work-experience/work-experience';
import { About } from '../section/about/about';
import { ResumeLink } from '../resume/resume-link/resume-link';
import { mockNavigationLinks } from '../../mock/navigation.mock';
import { Projects } from '../section/projects/projects';

@Component({
  selector: 'app-home',
  imports: [
    MainLayout,
    HeaderLayout,
    ContentLayout,
    Display,
    Navigation,
    ResumeLink,
    WorkExperience,
    About,
    Projects,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  mockNavigationData = mockNavigationLinks;
}
