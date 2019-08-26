import { Component, OnInit } from '@angular/core';
import {SampleService} from '../sample.service'
@Component({
  selector: 'app-cmpnt1',
  templateUrl: './cmpnt1.component.html',
  styleUrls: ['./cmpnt1.component.css']
})
export class Cmpnt1Component implements OnInit {
val;
  constructor(private ds:SampleService) { }
public show(){
  this.ds.getdata().subscribe(data=>{
   this.val=data; 
   console.log("data")
  })
}
  ngOnInit() {
  }

}
