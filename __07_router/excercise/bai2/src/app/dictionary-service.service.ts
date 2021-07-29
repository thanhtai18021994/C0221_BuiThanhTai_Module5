import { Injectable } from '@angular/core';
import {IWord} from './iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionary: IWord[]=[
    {
      word: "hello",
      mean: "xin chao"
    },{
    word: "boy",
      mean: "con trai"
    },
    {
      word: "girl",
      mean: "con gai"
    }
  ]
  constructor() { }
  findWord(text: string){
    let result="no result"
    for (let i = 0; i < this.dictionary.length; i++) {
      if(text===this.dictionary[i].word){
        result=this.dictionary[i].mean;
        break;
      }
    }
    return result;
  }

  findAll(){
    return this.dictionary;
  }

  findByWord(text:string){
    let result=null;
    for (let i = 0; i <this.dictionary.length ; i++) {
      if(this.dictionary[i].word===text){
        result=this.dictionary[i];
        break;
      }
    }
    return result;
  }
}
