import { Component } from '@angular/core';
import { DataService } from '../../data.service'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  formData = {
    id: '',
    title: '',
    body: '',
  };

  constructor(private dataService: DataService) {}

  handleSubmit(): void {
    this.dataService.addData(this.formData);

    this.formData = {
      id: '',
      title: '',
      body: '',
    };
  }
}
