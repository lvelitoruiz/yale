import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPublicationsComponent } from './print-publications.component';

describe('PrintPublicationsComponent', () => {
  let component: PrintPublicationsComponent;
  let fixture: ComponentFixture<PrintPublicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintPublicationsComponent]
    });
    fixture = TestBed.createComponent(PrintPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
