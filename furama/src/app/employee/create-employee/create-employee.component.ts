import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../service/employee.service';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
  }
  validator={
    name: [
      { type: 'required', msg: 'Làm ơn nhập trường này!' },
      { type: 'pattern', msg: 'Tên không đúng định dạng' }
    ], birthday: [
      { type: 'required', msg: 'Làm ơn nhập trường này!' },
      { type: 'pattern', msg: 'Tên không đúng định dạng' }
    ], idCard: [
      { type: 'required', msg: 'Làm ơn nhập trường này!' },
      { type: 'pattern', msg: 'Tên không đúng định dạng' }
    ], salary: [
      { type: 'required', msg: 'Làm ơn nhập trường này!' },
      { type: 'min', msg: 'Tên không đúng định dạng' }
    ], phoneNumber: [
      { type: 'required', msg: 'Làm ơn nhập trường này!' },
      { type: 'pattern', msg: 'Đầu số 090 hoặc 091' }
    ], email: [
      { type: 'required', msg: 'Làm ơn nhập trường này!' },
      { type: 'pattern', msg: 'Tên không đúng định dạng' }
    ], address: [
      { type: 'required', msg: 'Làm ơn nhập trường này!' }
    ], education: [
      { type: 'required', msg: 'Làm ơn nhập trường này!' }
    ], position: [
      { type: 'required', msg: 'Làm ơn nhập trường này!' }
    ], department: [
      { type: 'required', msg: 'Làm ơn nhập trường này!' }
    ]
  };
  ngOnInit(): void {
    this.getForm();
  }



  getForm() {
    this.employeeForm = this.fb.group({
      name: ['',[ Validators.required, Validators.pattern('')]],
      birthday: ['', [Validators.required, Validators.pattern('^(0?[1-9]|[12][0-9]|3[01])[\\/\\-](0?[1-9]|1[012])[\\/\\-]\\d{4}$')]],
      idCard: ['', [Validators.required, Validators.pattern('')]],
      salary: ['', [Validators.required, Validators.min(10)]],
      phoneNumber: ['',[ Validators.required, Validators.pattern("^(090|091|(\\+84)09)\\d{8}")]],
      email: ['', [Validators.required, Validators.pattern]],
      address: ['', Validators.required],
      education: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      Object.keys(this.employeeForm.controls).forEach(field => {
        const control = this.employeeForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      let employee: Employee = this.employeeForm.value;
      this.employeeService.createForm(employee).subscribe(response => {
        alert('Tao moi thanh cong');
      });
    }
  }

  resetForm() {
  }
}
