import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangebackgroundcolorComponent } from './changebackgroundcolor.component';

describe('ChangebackgroundcolorComponent', () => {
  let component: ChangebackgroundcolorComponent;
  let fixture: ComponentFixture<ChangebackgroundcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangebackgroundcolorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangebackgroundcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
