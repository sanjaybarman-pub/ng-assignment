import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogActionsComponent } from './log-actions.component';

describe('LogActionsComponent', () => {
  let component: LogActionsComponent;
  let fixture: ComponentFixture<LogActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
