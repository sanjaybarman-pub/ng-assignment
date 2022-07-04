import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ITimerData } from 'src/app/route3/timer.model';

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
      const resetButton = fixture.debugElement.query(By.css('#reset'));
      const mockFn = spyOn(component, 'onReset').and.callThrough();
      resetButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(mockFn).toHaveBeenCalled();
        expect(component.currentTimer).toBeNull();
      });
    });
    it('#start', () => {
      component.timerControl = new FormControl();
      component.timerControl.setValue(1000);
      component.timerControl.updateValueAndValidity();
      const startButton = fixture.debugElement.query(By.css('#start-pause'));
      const mockOnStartOrPause = spyOn(
        component,
        'onStartOrPause'
      ).and.callThrough();
      const mockStartTimer = spyOn(component, 'startTimer').and.callThrough();
      startButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(mockOnStartOrPause).toHaveBeenCalled();
        expect(mockStartTimer).toHaveBeenCalled();
      });
    });

    it('#pause', () => {
      component.timerData = MOCK_TIMER_DATA;
      const startButton = fixture.debugElement.query(By.css('#start-pause'));
      const mockOnStartOrPause = spyOn(
        component,
        'onStartOrPause'
      ).and.callThrough();
      const mockPauseTimer = spyOn(component, 'pauseTimer').and.callThrough();
      startButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(mockOnStartOrPause).toHaveBeenCalled();
        expect(mockPauseTimer).toHaveBeenCalled();
      });
    });
  });
});
