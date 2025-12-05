import { Component, Input, OnInit } from '@angular/core';
import { NavigationConfig } from '../../models/navigation/navigation.model';
import { ScrollSpyService } from '../../services/scroll-spy/scroll-spy';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation implements OnInit {
  @Input() navigationData!: NavigationConfig;
  active = '';

  constructor(private scrollSpy: ScrollSpyService) {}

  ngOnInit() {
    this.scrollSpy.sectionInView.subscribe((id) => {
      this.active = id || '';
    });
  }
}
