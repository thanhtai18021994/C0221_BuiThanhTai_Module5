import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  numberOne: number;
  result: any="";

  constructor() { }

  ngOnInit(): void {
  }
  resolve(param){
    this.result=this.result+param;
  }
  calculate(){

    this.result=eval(this.result);
  }
  delete(){
    this.result="";
  }
}
