import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetcounterComponent } from './resetcounter.component';

describe('ResetcounterComponent', () => {
  let component: ResetcounterComponent;
  let fixture: ComponentFixture<ResetcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetcounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
