import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Benhan} from '../model/benhan';

@Injectable({
  providedIn: 'root'
})
export class FinalService {
private readonly URL="http://localhost:3000/benhan";
  constructor(
    private http:HttpClient
  ) {}

  public getAll():Observable<Benhan[]>{
  return this.http.get<Benhan[]>(`http://localhost:3000/benhan`)
  }

  public delete(id:number):Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/benhan/${id}`)
  }

  public findById(id:number):Observable<Benhan>{
    return this.http.get<Benhan>(`http://localhost:3000/benhan/${id}`)
  }

  updateService(currentId: number, benhan: Benhan):Observable<Benhan> {
    return this.http.put<Benhan>(`http://localhost:3000/benhan/${currentId}`,benhan)
  }
}
