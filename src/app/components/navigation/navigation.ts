import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from '../../models/navigation/navigation.model';
import { ScrollSpyService } from '../../services/scroll-spy/scroll-spy';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation implements OnInit {
  @Input() links!: NavigationItem[];
  active = '';

  constructor(private scrollSpy: ScrollSpyService) {}

  ngOnInit() {
    this.scrollSpy.sectionInView.subscribe((id) => {
      this.active = id || '';
    });
  }

  // scrollTo(id: string) {
  //   this.active = id;
  //   document.getElementById(id)?.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //   });

  //   // Optional immediate URL update
  //   history.replaceState(null, '', `#${id}`);
  // }
}
