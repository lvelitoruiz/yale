import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondThoughtComponent } from './second-thought.component';

describe('SecondThoughtComponent', () => {
  let component: SecondThoughtComponent;
  let fixture: ComponentFixture<SecondThoughtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondThoughtComponent]
    });
    fixture = TestBed.createComponent(SecondThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
