import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css'],
})
export class CustomTableComponent implements OnInit {
  dataSource!: MatTableDataSource<any>; 
  displayedColumns: string[] = ['id', 'title', 'body', 'action'];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataService.getData());
  }

  handleDelete(row: any): void {
    const index = this.dataSource.data.indexOf(row);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
  }
}
