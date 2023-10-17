import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolArtComponent } from './school-art.component';

describe('SchoolArtComponent', () => {
  let component: SchoolArtComponent;
  let fixture: ComponentFixture<SchoolArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolArtComponent]
    });
    fixture = TestBed.createComponent(SchoolArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
