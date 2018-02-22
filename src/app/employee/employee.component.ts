import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-employee',
  template: `
  <h2>Employee List</h2>
    <p *ngFor="let empObj of empList">
      {{empObj.name}}
    </p>
    {{errorMsg}}
  `,
  styles: []
})
export class EmployeeComponent implements OnInit {
  empList = [];
  constructor(private _service: ServiceService) { }
  errorMsg: string;
  ngOnInit() {
    this._service.getEmployees().subscribe(data => this.empList = data,
      error => this.errorMsg = error);
  }

}
