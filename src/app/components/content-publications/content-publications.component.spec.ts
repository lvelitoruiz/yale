import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPublicationsComponent } from './content-publications.component';

describe('ContentPublicationsComponent', () => {
  let component: ContentPublicationsComponent;
  let fixture: ComponentFixture<ContentPublicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentPublicationsComponent]
    });
    fixture = TestBed.createComponent(ContentPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
