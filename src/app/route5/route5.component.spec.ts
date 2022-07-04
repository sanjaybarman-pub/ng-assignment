import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route5Component } from './route5.component';

describe('Route5Component', () => {
  let component: Route5Component;
  let fixture: ComponentFixture<Route5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route5Component ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Route5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
