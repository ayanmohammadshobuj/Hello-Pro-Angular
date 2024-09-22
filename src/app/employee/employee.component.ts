import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees = [
    { id: 1, name: 'Sakibur', position: 'Software Engineer', department: 'Development', salary: 180000 },
    { id: 2, name: 'Monirul', position: 'Project Manager', department: 'Management', salary: 90000 },
    { id: 3, name: 'Rakib', position: 'UX Designer', department: 'Design', salary: 70000 }
  ];

}
