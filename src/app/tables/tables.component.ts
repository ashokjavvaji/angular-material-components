import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tableColumnsToDisplay: string[] = ['id','name','band'];
  tableDataSource: MatTableDataSource<Employee>;
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    //convert band id's to values
    const emps: Employee[] = [];
    for(let i=0;i<EMP_DATA.length;i++) {
      emps.push(createEmployeeForUI(EMP_DATA[i]));
    }
    this.tableDataSource = new MatTableDataSource(emps);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
    this.tableDataSource.sort = this.sort;
  }

  filterTableData(filterText:string) {
    filterText = filterText.trim();
    filterText = filterText.toLowerCase()//datasource defaults to search in lowercase
    this.tableDataSource.filter = filterText;
  }

  onPageEvent(event:PageEvent) {
    this.pageEvent = event;
    console.log("You are in page# "+this.pageEvent.pageIndex);
  }
}

function createEmployeeForUI(employee: EmployeeRest): Employee {
  return {
    id: employee.id,
    name: employee.name,
    band: EMP_BANDS[employee.band]
  };
}

export interface Employee {
  id: number;
  name: string;
  band: string;
}

export interface EmployeeRest {
  id: number;
  name: string;
  band: number;
}

const EMP_BANDS:string[] = ['B1','B2','B3','C1','C2'];
const EMP_DATA:EmployeeRest[] = [
  {id:1, name:"Abc",band:0},
  {id:2, name:"Bsd Asd",band:1},
  {id:3, name:"Xcd Egf",band:2},
  {id:4, name:"Asfsd qwewrwq",band:1},
  {id:5, name:"Adsd Asdfw",band:3},
  {id:6, name:"Qwerwe Uuyio",band:4},
  {id:7, name:"Ojbmb Jyggb",band:1},
  {id:8, name:"Pdsfds Ymsnsk",band:0},
  {id:9, name:"Hsdfsd Kjjsj",band:0},
  {id:10, name:"Exdsdf Rrsdsd",band:0},
  {id:11, name:"Bsfjsdkfjs Asdfsds Usdss",band:0},
  {id:12, name:"Adsrjdfhs Hsdsds",band:2},
  {id:13, name:"Cwdfsdfsd Ssdfsd",band:1},
  {id:14, name:"Asdsder Khjhbnb",band:1},
];