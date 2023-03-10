import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  GetAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/Employee/GetAllEmployee');
  }

  AddEmployee(addEmployeeRequest:Employee): Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl + '/api/Employee/SaveEmployee',addEmployeeRequest);
  }


}
