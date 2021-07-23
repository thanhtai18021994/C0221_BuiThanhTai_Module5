import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-color',
  templateUrl: './pick-color.component.html',
  styleUrls: ['./pick-color.component.css']
})
export class PickColorComponent implements OnInit {
color: string='#634a82';
red=0;
green=0;
blue=0;

  constructor() {
  }

  ngOnInit(): void {
  }

  change():void{
    let red=this.red.toString(16)
    let green=this.green.toString(16)
    let blue=this.blue.toString(16)
    if(red.length===1){
      red='0'+red;
    }
    if(green.length===1){
      green='0'+green;
    }
    if(blue.length===1){
      blue='0'+blue;
    }
    let color='#'+red+green+blue;
    this.color=color;
  }
}
