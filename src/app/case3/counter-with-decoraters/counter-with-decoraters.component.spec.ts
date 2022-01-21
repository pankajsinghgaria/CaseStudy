import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWithDecoratersComponent } from './counter-with-decoraters.component';

describe('CounterWithDecoratersComponent', () => {
  let component: CounterWithDecoratersComponent;
  let fixture: ComponentFixture<CounterWithDecoratersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterWithDecoratersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterWithDecoratersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
