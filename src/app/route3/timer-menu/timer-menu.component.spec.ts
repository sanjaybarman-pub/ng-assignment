import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ITimerData } from '../timer.model';

import { TimerMenuComponent } from './timer-menu.component';

const MOCK_TIMER_DATA: ITimerData[] = [
  {
    limit: 1000,
    isActive: true,
    startTime: new Date().toISOString(),
  },
];

describe('TimerMenuComponent', () => {
  let component: TimerMenuComponent;
  let fixture: ComponentFixture<TimerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#actions', () => {
    it('#reset', () => {
      const mockFn = spyOn(component, 'onReset').and.callThrough();
      const resetButton = fixture.debugElement.query(By.css('#reset'));
      resetButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(mockFn).toHaveBeenCalled();
      });
    });
    it('#start', () => {
      component.timerControl = new FormControl();
      component.timerControl.setValue(1000);
      component.timerControl.updateValueAndValidity();
      const mockOnStartOrPauseFn = spyOn(
        component,
        'onStartOrPause'
      ).and.callThrough();
      const mockStartTimerFn = spyOn(component, 'startTimer').and.callThrough();
      const startButton = fixture.debugElement.query(By.css('#start-pause'));
      startButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(mockOnStartOrPauseFn).toHaveBeenCalled();
        expect(mockStartTimerFn).toHaveBeenCalled();
      });
      fixture.detectChanges();
    });
    it('#pause', () => {
      component.timerData = MOCK_TIMER_DATA;
      const startButton = fixture.debugElement.query(By.css('#start-pause'));
      const mockOnStartOrPausFn = spyOn(
        component,
        'onStartOrPause'
      ).and.callThrough();
      startButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(mockOnStartOrPausFn).toHaveBeenCalled();
      });
    });
  });
});
