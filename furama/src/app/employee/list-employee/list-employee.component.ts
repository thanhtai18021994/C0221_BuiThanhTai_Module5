import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../../service/employee.service';
import {PositionService} from '../../service/position.service';
import {PositionModel} from '../../model/PositionModel';
import Swal from 'sweetalert2';
import {Department} from '../../model/department';
import {Education} from '../../model/education';
import {EducationService} from '../../service/education.service';
import {DepartmentService} from '../../service/department.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees!: Employee[];
  p: number = 1;
  departments: Department[];
  positions: PositionModel[];
  educations: Education[];

  constructor(
    private employeeService: EmployeeService,
    private educationService: EducationService,
    private departmentService: DepartmentService,
    private positionService: PositionService
  ) {
    this.departmentService.findAll().subscribe(departments => {
      this.departments = departments;
    });
    this.educationService.findAll().subscribe(education => {
      this.educations = education;
    });
    this.positionService.getPosition().subscribe(positions => {
      this.positions = positions;
    });
  }

  ngOnInit(): void {
    this.getEmployees();
    this.getPosition();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(responsive => {
      this.employees = responsive;
    });
  }

  getPosition() {
    this.positionService.getPosition().subscribe(response => {
      this.positions = response;
    });
  }

  searchAllField(value: string) {
    console.log(typeof value);
    this.employeeService.searchNameOrPhone(value).subscribe(response => {
      this.employees = response;
      console.log(response);
    });
  }

  searchPosition(value: string) {
    console.log(value);
    this.employeeService.searchPosition(value).subscribe(response => {
      this.employees = response;
    });
  }

  delete(id: number) {
    this.getAgree(id);
  }

  agreeDelete(id:number) {
    this.employeeService.delete(id).subscribe((employee) => {
      this.getEmployees();
    });
  }

  getAgree(id:number) {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Xóa`,
      denyButtonText: `Không xóa`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.agreeDelete(id);
        Swal.fire('Đã Xóa!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Vậy thì đừng bấm dm!', '', 'info');
      }
    });
  }
  flag:boolean=false;

  controlModal(){
    if (!this.flag){
      this.flag=true
    }else {
      this.flag=false;
    }
  }

  search(position:string,education:string,department:string){
    console.log(position,education,department);
  }
}
