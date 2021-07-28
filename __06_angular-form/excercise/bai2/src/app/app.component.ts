import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'bai2';
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.login();
  }

  login() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.loginForm.valueChanges.subscribe(data => console.log(data));
  }

  onLogin(){
    if (this.loginForm.valid){
      console.log('login don not successful');
    }else {
      console.log(this.loginForm.value);
    }
  }
}
