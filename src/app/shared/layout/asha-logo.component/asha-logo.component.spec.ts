import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshaLogoComponent } from './asha-logo.component';

describe('AshaLogoComponent', () => {
  let component: AshaLogoComponent;
  let fixture: ComponentFixture<AshaLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AshaLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AshaLogoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
