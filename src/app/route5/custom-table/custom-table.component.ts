import { Component, Input, OnInit } from '@angular/core';
import { ITableData, ITableHeader } from './table.model';

enum SortStatus {
  Reset = 'reset',
  Asc = 'asc',
  Desc = 'desc',
}

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent implements OnInit {
  @Input() tableHeader: ITableHeader[] = [];
  @Input() tableData: ITableData[] = [];

  studentList: any;
  headerListMapped: ITableHeader[] = [];
 

  constructor() {}

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void {
    this.headerListMapped = this.tableHeader.map((el) => ({
      ...el,
      sort: SortStatus.Reset,
    }));
  }

  sortList(key: string, sortOrder?: string) {
    if (sortOrder === SortStatus.Reset) {
      key = 'id';
      sortOrder = SortStatus.Asc;
    }
    this.tableData.sort((a, b) => {
      const firstValue = a[`${key}`];
      const secondValue = b[`${key}`];
      if (firstValue < secondValue)
        return sortOrder === SortStatus.Asc ? -1 : 1;
      else if (firstValue > secondValue)
        return sortOrder === SortStatus.Asc ? 1 : -1;
      return 0;
    });
  }

  onClick(ev: any) {
    this.headerListMapped = this.headerListMapped.map((el: any) => {
      if (el.id === ev.target.id) {
        return {
          ...el,
          sort:
            el.sort === SortStatus.Reset
              ? SortStatus.Asc
              : el.sort === SortStatus.Asc
              ? SortStatus.Desc
              : SortStatus.Reset,
        };
      }
      return el;
    });
    this.sortList(
      ev.target.id,
      this.headerListMapped.find((el) => el.id === ev.target.id).sort
    );
  }
}
