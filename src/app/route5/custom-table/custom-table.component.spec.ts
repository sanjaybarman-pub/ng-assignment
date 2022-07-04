import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomTableComponent } from './custom-table.component';

const MOCK_TABLE_HEADER = [
  { id: 'id', name: 'ID', sort: 'reset' },
  {
    id: 'name',
    name: 'Name',
    sort: 'reset',
  },
  {
    id: 'ee',
    name: 'EE',
    sort: 'reset',
  },
  {
    id: 'cs',
    name: 'CS',
    sort: 'reset',
  },
  {
    id: 'dbms',
    name: 'DBMS',
    sort: 'reset',
  },
];

describe('CustomTableComponent', () => {
  let component: CustomTableComponent;
  let fixture: ComponentFixture<CustomTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on call #onClick, #shortList should triger', () => {
    component.headerListMapped = MOCK_TABLE_HEADER;
    const event = {
      target: {
        id: 'id',
      },
    };
    component.onClick(event);
  });
});
