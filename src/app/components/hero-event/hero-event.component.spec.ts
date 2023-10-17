import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEventComponent } from './hero-event.component';

describe('HeroEventComponent', () => {
  let component: HeroEventComponent;
  let fixture: ComponentFixture<HeroEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroEventComponent]
    });
    fixture = TestBed.createComponent(HeroEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
