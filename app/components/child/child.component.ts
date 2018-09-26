import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
//import { Output } from '@angular/core/src/metadata/directives';
//import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  @Output() funk= new EventEmitter(); 
  constructor() { }
@Input() arr;
  ngOnInit() {
  }
 // arr:Msg[]=[];
  txt:string;
  fun(e){
    if(e.keyCode==13){
      this.funk.emit(this.txt);
      this.txt = '';
      /*
      this.arr.push(new Msg(this.txt,false));
      console.log(this.arr);
      
    */
    }
  }    
 

}
export class Msg{
  constructor(public title:string,public done:boolean){}
}