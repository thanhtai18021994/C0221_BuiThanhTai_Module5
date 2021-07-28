import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.class';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  user: User = new User();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(value: NgForm){
  }
  onResetForm(value: NgForm){
    value.reset();
  }
}
