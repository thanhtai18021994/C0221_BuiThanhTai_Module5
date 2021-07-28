import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly URI_API=environment.apiUrl
  constructor(private http:HttpClient) {}
  public getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.URI_API}/employee`);
  }

  searchNameOrPhone(value:string):Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.URI_API}/employee?phoneNumber_like=${value}`)
  }

  searchPosition(value:string):Observable<Employee[]>{
    if (value=='null'){
      return this.http.get<Employee[]>(`${this.URI_API}/employee`);
    }
    return this.http.get<Employee[]>(`${this.URI_API}/employee?position=${value}`)
  }

  createForm(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.URI_API}/employee`,employee);
  }

}
