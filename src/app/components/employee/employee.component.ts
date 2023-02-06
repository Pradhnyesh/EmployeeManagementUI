import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.GetAllEmployee().subscribe(data=>{
      this.employees=data;
      console.log(this.employees)
    });
  }
}
