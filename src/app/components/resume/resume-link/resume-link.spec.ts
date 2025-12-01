import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeLink } from './resume-link';

describe('ResumeLink', () => {
  let component: ResumeLink;
  let fixture: ComponentFixture<ResumeLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
