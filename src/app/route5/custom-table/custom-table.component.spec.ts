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

const MOCK_TABLE_DATA = [
  {
    id: 1,
    name: 'Den Sawford',
    ee: 12,
    cs: 100,
    hu: 76,
    dbms: 80,
  },
  {
    id: 2,
    name: 'Shandy Ginty',
    ee: 41,
    cs: 34,
    hu: 60,
    dbms: 68,
  },
  {
    id: 3,
    name: 'Ronnica Torri',
    ee: 65,
    cs: 52,
    hu: 71,
    dbms: 75,
  },
  {
    id: 4,
    name: 'Aldridge Bransom',
    ee: 39,
    cs: 10,
    hu: 88,
    dbms: 19,
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

  describe('#sortList', () => {
    it('If previous sorting order #reset/#asc, should short with descending order', () => {
      component.tableData = MOCK_TABLE_DATA;
      // sorting mockData with ascending order
      const sortedMockData = MOCK_TABLE_DATA.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });
      component.sortList('name', 'reset');
      expect(component.tableData).toBe(sortedMockData);
    });
    it('If previous sorting order #desc, should short with Ascending order', () => {
      component.tableData = MOCK_TABLE_DATA;
      // sorting mockData with descending order
      const sortedMockData = MOCK_TABLE_DATA.sort((a, b) => {
        return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
      });
      component.sortList('name', 'desc');
      expect(component.tableData).toBe(sortedMockData);
    });
  });

  describe('#onClick', () => {
    const event = {
      target: {
        id: 'id',
      },
    };
    it('#shortList should triger for "ace" order', () => {
      const mockFn = spyOn(component, 'sortList');
      component.headerListMapped = MOCK_TABLE_HEADER;
      component.onClick(event);
      expect(mockFn).toHaveBeenCalledWith('id', 'asc');
    });
    it('#shortList should triger for "desc" order', () => {
      component.headerListMapped.shift();
      component.headerListMapped.unshift({ id: 'id', name: 'ID', sort: 'asc' });
      const mockFn = spyOn(component, 'sortList');
      component.onClick(event);
      expect(mockFn).toHaveBeenCalledWith('id', 'desc');
    });
    it('#shortList should triger for "reset" order', () => {
      component.headerListMapped.shift();
      component.headerListMapped.unshift({
        id: 'id',
        name: 'ID',
        sort: 'desc',
      });
      const mockFn = spyOn(component, 'sortList');
      component.onClick(event);
      expect(mockFn).toHaveBeenCalledWith('id', 'reset');
    });
  });
});
