import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommomService {

  constructor() { }
  set(key,value){
    //console.log('set');
    localStorage.setItem(key,value);
  }
  get(key){
    //console.log('get方法调用了');
    localStorage.getItem(key);
  }
}
