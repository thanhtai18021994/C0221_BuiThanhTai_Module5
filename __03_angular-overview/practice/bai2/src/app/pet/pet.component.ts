import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';
@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'dog',
    image: 'https://yolo.vn/wp-content/uploads/2019/08/hinh-anh-cho-pomsky-dep-45.jpg'};
  constructor() { }

  ngOnInit(): void {
  }

}
