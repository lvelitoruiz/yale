import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentExhibitionsComponent } from './content-exhibitions.component';

describe('ContentExhibitionsComponent', () => {
  let component: ContentExhibitionsComponent;
  let fixture: ComponentFixture<ContentExhibitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentExhibitionsComponent]
    });
    fixture = TestBed.createComponent(ContentExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
