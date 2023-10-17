import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsDegreeComponent } from './arts-degree.component';

describe('ArtsDegreeComponent', () => {
  let component: ArtsDegreeComponent;
  let fixture: ComponentFixture<ArtsDegreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtsDegreeComponent]
    });
    fixture = TestBed.createComponent(ArtsDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
