import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroExhibitionsComponent } from './hero-exhibitions.component';

describe('HeroExhibitionsComponent', () => {
  let component: HeroExhibitionsComponent;
  let fixture: ComponentFixture<HeroExhibitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroExhibitionsComponent]
    });
    fixture = TestBed.createComponent(HeroExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
