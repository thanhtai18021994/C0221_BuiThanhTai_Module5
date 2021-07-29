import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from '../dictionary-service.service';
import {ActivatedRoute} from '@angular/router';
import {IWord} from '../iword';

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {
  detailWord: IWord=null;
  constructor(
    private dictionaryService: DictionaryServiceService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.view()
  }

  view(){
    let value = this.activatedRoute.params.subscribe(data=>{
      console.log(data['id'][0]);
      this.detailWord=this.dictionaryService.findByWord(data['id'])
    });
  }
}
