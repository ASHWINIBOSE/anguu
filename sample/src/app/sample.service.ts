import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private hc:HttpClient) { }
  public getdata(){
    let url="http://localhost:8081/data"
    return this.hc.get(url);
  }
}
