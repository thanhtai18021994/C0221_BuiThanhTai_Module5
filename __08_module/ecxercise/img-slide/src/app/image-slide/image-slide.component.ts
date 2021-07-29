import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.css']
})
export class ImageSlideComponent implements OnInit {

  url: string='/assets/image/'+'fd93f14bb97f4d3b47700b90d760f3f3.jpg';

  constructor() { }
  ngOnInit(): void {
    this.slide()
  }

  slide(){
    let img=['193566506_490994288681857_3303324432471538408_n.jpg','fd93f14bb97f4d3b47700b90d760f3f3.jpg']
    let index=0;
    setInterval(()=>{
      index++;
      if (index>=2){
        index=0
      }
      this.url='/assets/image/'+img[index];
    },1000)
  }
}
