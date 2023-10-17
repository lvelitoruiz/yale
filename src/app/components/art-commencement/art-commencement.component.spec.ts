import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtCommencementComponent } from './art-commencement.component';

describe('ArtCommencementComponent', () => {
  let component: ArtCommencementComponent;
  let fixture: ComponentFixture<ArtCommencementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtCommencementComponent]
    });
    fixture = TestBed.createComponent(ArtCommencementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
