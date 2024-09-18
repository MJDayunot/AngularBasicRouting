import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowparagraphComponent } from './showparagraph.component';

describe('ShowparagraphComponent', () => {
  let component: ShowparagraphComponent;
  let fixture: ComponentFixture<ShowparagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowparagraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowparagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
