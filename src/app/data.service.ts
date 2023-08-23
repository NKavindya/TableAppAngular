import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: any[] = [];

  addData(item: any): void {
    this.data.push(item);
  }

  getData(): any[] {
    return this.data;
  }

  deleteData(index: number): void {
    this.data.splice(index, 1);
  }
}
