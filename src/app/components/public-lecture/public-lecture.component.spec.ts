import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLectureComponent } from './public-lecture.component';

describe('PublicLectureComponent', () => {
  let component: PublicLectureComponent;
  let fixture: ComponentFixture<PublicLectureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicLectureComponent]
    });
    fixture = TestBed.createComponent(PublicLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
