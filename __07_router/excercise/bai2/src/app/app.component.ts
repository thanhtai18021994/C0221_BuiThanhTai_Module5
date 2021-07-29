import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from './dictionary-service.service';
import {IWord} from './iword';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bai2';
  word:string;
  words: IWord[]=[];
  constructor(private dictionaryService: DictionaryServiceService) {
  }
  findWord(text:string){
    this.word=this.dictionaryService.findWord(text);
  }
  findAll(){
   this.words = this.dictionaryService.findAll()
  }

  ngOnInit(): void {
    this.findAll()
  }

}
