import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Route6Component } from './route6.component';

describe('Route6Component', () => {
  let component: Route6Component;
  let fixture: ComponentFixture<Route6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Route6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Route6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onClick', () => {
    it('On click firt div, should display message for "1st div', () => {
      const mockFn = spyOn(window, 'alert');
      component.onClick(0);
      const outputStr = 'Button in 1st div clicked.';
      expect(mockFn).toHaveBeenCalledWith(outputStr);
    });
    it('On click second div, should display message for "2nd div', () => {
      const mockFn = spyOn(window, 'alert');
      component.onClick(1);
      const outputStr = 'Button in 2nd div clicked.';
      expect(mockFn).toHaveBeenCalledWith(outputStr);
    });
    it('On click third div, should display message for "3rd div', () => {
      const mockFn = spyOn(window, 'alert');
      component.onClick(2);
      const outputStr = 'Button in 3rd div clicked.';
      expect(mockFn).toHaveBeenCalledWith(outputStr);
    });
    it('On click fourth and beyond, message should display with "${id} th div"', () => {
      const mockFn = spyOn(window, 'alert');
      component.onClick(5);
      const outputStr = 'Button in 6th div clicked.';
      expect(mockFn).toHaveBeenCalledWith(outputStr);
    });
  });
});
