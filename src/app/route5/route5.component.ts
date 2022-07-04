import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../shared/data.service';
import { ITableData, ITableHeader } from './custom-table/table.model';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.scss'],
})
export class Route5Component implements OnInit, OnDestroy {
  headerList: ITableHeader[] = [
    { id: 'id', name: 'ID' },
    {
      id: 'name',
      name: 'Name',
    },
    {
      id: 'ee',
      name: 'EE',
    },
    {
      id: 'cs',
      name: 'CS',
    },
    {
      id: 'dbms',
      name: 'DBMS',
    },
  ];

  unSubscribe: Subject<void> = new Subject();

  studentList: ITableData[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getStudents()
      .pipe(takeUntil(this.unSubscribe))
      .subscribe((res) => {
        this.studentList = res;
      });
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
