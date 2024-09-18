import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintmessagetoconsoleComponent } from './printmessagetoconsole.component';

describe('PrintmessagetoconsoleComponent', () => {
  let component: PrintmessagetoconsoleComponent;
  let fixture: ComponentFixture<PrintmessagetoconsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintmessagetoconsoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintmessagetoconsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
