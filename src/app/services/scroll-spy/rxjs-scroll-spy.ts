import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { map, throttleTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollSpy2Service {
  sectionInView = new BehaviorSubject<string | null>(null);

  private sections: HTMLElement[] = [];
  private offset = 96; // trigger point from top

  init(sectionIds: string[]) {
    // Cache DOM references
    this.sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    // Scroll events (throttled for performance)
    fromEvent(window, 'scroll')
      .pipe(
        throttleTime(50, undefined, { leading: true, trailing: true }),
        map(() => this.detectSection()),
        distinctUntilChanged()
      )
      .subscribe((id) => {
        if (id) this.sectionInView.next(id);
      });

    // Run once on init
    const initial = this.detectSection();
    if (initial) this.sectionInView.next(initial);
  }

  /** Computes which section's top is closest BELOW the trigger line (96px) */
  private detectSection(): string | null {
    const triggerLine = this.offset;

    // find section whose top ≤ triggerLine but closest to it
    let active: { id: string; distance: number } | null = null;

    for (const section of this.sections) {
      const rect = section.getBoundingClientRect();
      const top = rect.top;

      if (top <= triggerLine) {
        const distance = triggerLine - top;
        if (!active || distance < active.distance) {
          active = { id: section.id, distance };
        }
      }
    }

    // If none are above the trigger line, user is at the top → choose first section
    if (!active) {
      return this.sections[0]?.id ?? null;
    }

    return active.id;
  }
}
