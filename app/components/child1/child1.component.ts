import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Output() delIndex = new EventEmitter();
  @Output() delIndex1 = new EventEmitter();
  @Output() funIndex = new EventEmitter();
  @Output() funIndex2 = new EventEmitter();
  @Input() arr;
  @Input() arr1;
  constructor() { }
  del1(idx){
    this.delIndex.emit(idx);
  }
  del2(idx){
    this.delIndex1.emit(idx);
  }
  /*
  del(idx){
    this.arr.splice(idx,1);
  }
  del1(idx){
    this.arr1.splice(idx,1);
  }
  */
  fun1(idx){
    this.funIndex.emit(idx);
  }
  
  fun2(idx){
   
    this.funIndex2.emit(idx);
  }

  /*
   fun1(idx){
       this.arr1.unshift(this.arr[idx]);
       this.arr.splice(idx,1);
   }
   fun2(idx){
    this.arr.unshift(this.arr1[idx]);
    this.arr1.splice(idx,1);}
  */  
  ngOnInit() {
  }

}
