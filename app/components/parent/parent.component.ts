import { Component, OnInit,Input } from '@angular/core';
import{CommomService}from'../../services/commom.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  //@Input() arr;
  //@Input() arr1;
  constructor(private local:CommomService) { }
  data:string[]=[];
  data1:string[]=[];
  fun(a){
    this.data.push(a);
    //console.log(this.data);
    this.local.set("list1",this.data);
  }
  del1(idx){
    this.data.splice(idx,1);
    this.local.set("list1",this.data);
  }
  del2(idx){
    this.data1.splice(idx,1);
    this.local.set("list2",this.data1);
  }

  fun1(idx){
    this.data1.unshift(this.data[idx]);
    this.data.splice(idx,1);
    this.local.set("list1",this.data);
    this.local.set("list2",this.data1);
}
  fun2(idx){
    this.data.unshift(this.data1[idx]);
    this.data1.splice(idx,1);
    this.local.set("list1",this.data);
    this.local.set("list2",this.data1);
  }
  
  ngOnInit() {
    if(this.local.get("list1")&&this.local.get("list2")){
      this.data=this.local.get("list1").split(",");
    }
    if(this.local.get("list2")){
      this.data1=this.local.get("list2").split(",");
    }
  }

}
