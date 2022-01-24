import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountLogComponent } from './count-log.component';

describe('CountLogComponent', () => {
  let component: CountLogComponent;
  let fixture: ComponentFixture<CountLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
