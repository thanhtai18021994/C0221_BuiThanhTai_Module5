import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../../service/employee.service';
import {PositionService} from '../../service/position.service';
import {PositionModel} from '../../model/PositionModel';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees!: Employee[];
  p: number = 1;
  positions!:PositionModel[];
  constructor(
    private employeeService: EmployeeService,
    private positionService:PositionService
  ) {
  }

  ngOnInit(): void {
    this.getEmployees();
    this.getPosition();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(responsive => {
      this.employees = responsive;
    })
  }
  getPosition(){
    this.positionService.getPosition().subscribe(response=>{
      this.positions=response;
    })
  }
  searchAllField(value:string){
    console.log(typeof value);
    this.employeeService.searchNameOrPhone(value).subscribe(response=>{
      this.employees=response;
      console.log(response);
    })
  }

  searchPosition(value:string){
    console.log(value);
    this.employeeService.searchPosition(value).subscribe(response=>{
      this.employees=response;
    })
  }
}
