import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentApplyComponent } from './content-apply.component';

describe('ContentApplyComponent', () => {
  let component: ContentApplyComponent;
  let fixture: ComponentFixture<ContentApplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentApplyComponent]
    });
    fixture = TestBed.createComponent(ContentApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
