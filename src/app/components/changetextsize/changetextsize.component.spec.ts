import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangetextsizeComponent } from './changetextsize.component';

describe('ChangetextsizeComponent', () => {
  let component: ChangetextsizeComponent;
  let fixture: ComponentFixture<ChangetextsizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangetextsizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangetextsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
