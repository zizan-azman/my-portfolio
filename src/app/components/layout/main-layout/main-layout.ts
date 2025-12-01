import { Component, OnInit } from '@angular/core';
import { ScrollSpyService } from '../../../services/scroll-spy/scroll-spy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout implements OnInit {
  constructor(private scrollSpy: ScrollSpyService, private router: Router) {}

  ngOnInit() {
    const sections = ['about', 'experience', 'projects'];
    this.scrollSpy.init(sections);

    this.scrollSpy.sectionInView.subscribe((id) => {
      if (id) {
        this.router.navigate([], {
          fragment: id,
          replaceUrl: true,
        });
      }
    });
  }
}
