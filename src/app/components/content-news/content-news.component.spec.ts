import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNewsComponent } from './content-news.component';

describe('ContentNewsComponent', () => {
  let component: ContentNewsComponent;
  let fixture: ComponentFixture<ContentNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentNewsComponent]
    });
    fixture = TestBed.createComponent(ContentNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
