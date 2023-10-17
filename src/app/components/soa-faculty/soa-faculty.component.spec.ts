import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoaFacultyComponent } from './soa-faculty.component';

describe('SoaFacultyComponent', () => {
  let component: SoaFacultyComponent;
  let fixture: ComponentFixture<SoaFacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoaFacultyComponent]
    });
    fixture = TestBed.createComponent(SoaFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
