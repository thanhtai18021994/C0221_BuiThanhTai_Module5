import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input() time = 10;
  presentTime;
  interval: number;
  constructor() { }

  ngOnInit(): void {
    this.presentTime = this.time;
  }
  start(){
    this.time = 10;
    this.interval = setInterval(() => {
      this.time = +this.time - 1;
      if (this.time === 0){
        console.log(this.presentTime);
        clearInterval(this.interval);
      }
    }, 1000);
  }

  stop(){
    clearInterval(this.interval);
  }
  reset(){
    this.time = this.presentTime;
  }
}
