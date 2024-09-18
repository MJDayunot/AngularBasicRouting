import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisablebuttonafterclickComponent } from './disablebuttonafterclick.component';

describe('DisablebuttonafterclickComponent', () => {
  let component: DisablebuttonafterclickComponent;
  let fixture: ComponentFixture<DisablebuttonafterclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisablebuttonafterclickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisablebuttonafterclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
