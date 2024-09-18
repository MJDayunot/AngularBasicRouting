import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideelementComponent } from './hideelement.component';

describe('HideelementComponent', () => {
  let component: HideelementComponent;
  let fixture: ComponentFixture<HideelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HideelementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HideelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
