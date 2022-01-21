import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWithSubjectComponent } from './counter-with-subject.component';

describe('CounterWithSubjectComponent', () => {
  let component: CounterWithSubjectComponent;
  let fixture: ComponentFixture<CounterWithSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterWithSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterWithSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
