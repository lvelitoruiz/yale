import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroApplyComponent } from './hero-apply.component';

describe('HeroApplyComponent', () => {
  let component: HeroApplyComponent;
  let fixture: ComponentFixture<HeroApplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroApplyComponent]
    });
    fixture = TestBed.createComponent(HeroApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
