import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollSpyService {
  private observer!: IntersectionObserver;
  private currentId: string | null = null;
  private currentRatio = 0;

  sectionInView = new BehaviorSubject<string | null>(null);

  init(sectionIds: string[]) {
    const SWITCH_TOLERANCE = 0.05; // 5%

    this.observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section from this callback
        let winner: { id: string; ratio: number } | null = null;

        for (const entry of entries) {
          const id = entry.target.getAttribute('id')!;
          const ratio = entry.intersectionRatio;

          if (!winner || ratio > winner.ratio) {
            winner = { id, ratio };
          }
        }

        if (!winner) return;

        // If no active section yet → set immediately
        if (!this.currentId) {
          this.setActive(winner.id, winner.ratio);
          return;
        }

        // If the winner is the current section → update ratio (smooth)
        if (winner.id === this.currentId) {
          this.currentRatio = winner.ratio;
          return;
        }

        // HYSTERESIS LOGIC:
        // Only switch if the new section is noticeably more visible
        if (winner.ratio > this.currentRatio + SWITCH_TOLERANCE) {
          this.setActive(winner.id, winner.ratio);
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: '-10% 0px -55% 0px',
      }
    );

    // observe sections
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  }

  private setActive(id: string, ratio: number) {
    this.currentId = id;
    this.currentRatio = ratio;
    this.sectionInView.next(id);

    // update url
    history.replaceState(null, '', `#${id}`);
  }
}
