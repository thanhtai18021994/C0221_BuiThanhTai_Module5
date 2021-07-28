import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterClass} from './model/register.class';
import {comparePassword} from './confirmPassword.validator';
import {CustomValidatorClass} from './customValidator.class';

let listRegister: RegisterClass[]=new Array();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  formRegister: FormGroup;
  title: 'bai1';
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.register();
  }
  register(){
    this.formRegister = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z]*\@gmail.com$')]],
      pwGroup: this.formBuilder.group({
        password:['',[Validators.required, Validators.minLength(6)]],
        confirmPassword: ['',Validators.required]
      },{validators: comparePassword}),
      country: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), CustomValidatorClass.checkAge]],
      phone: ['', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]]
    });
  }

  onSubmit(){
    const registers = new RegisterClass(
      this.formRegister.value.email,
      this.formRegister.value.pwGroup.password,
      this.formRegister.value.country,
      this.formRegister.value.gender,
      this.formRegister.value.phone,
      this.formRegister.value.age);
      listRegister.push(registers);
      this.formRegister.reset();
  }

}
