import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowspecialmessageComponent } from './showspecialmessage.component';

describe('ShowspecialmessageComponent', () => {
  let component: ShowspecialmessageComponent;
  let fixture: ComponentFixture<ShowspecialmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowspecialmessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowspecialmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
