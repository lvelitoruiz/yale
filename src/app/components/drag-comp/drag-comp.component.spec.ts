import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragCompComponent } from './drag-comp.component';

describe('DragCompComponent', () => {
  let component: DragCompComponent;
  let fixture: ComponentFixture<DragCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragCompComponent]
    });
    fixture = TestBed.createComponent(DragCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
