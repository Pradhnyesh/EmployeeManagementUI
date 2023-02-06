import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    number: ''
  };
  constructor(private employeeService: EmployeesService , private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee()
    {
      this.employeeService.AddEmployee(this.addEmployeeRequest)
      .subscribe({
        next: (employee) => {
          console.log(employee);
          this.router.navigate(['employees']);
        }
        // this.router.navigate(['employees']);
      });
    }

}

