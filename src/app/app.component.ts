import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output,OnInit} from '@angular/core';
import{interval, reduce} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'SecondAlgular-App';
  outputdis='opened';
opened: any;
  Onclick()
  {
    this.outputdis="closed ";
  }
  constructor(private http:HttpClient)
  {

  }
  value1="hidden";
  value2="";
  size=16;
  addition(){
    if(this.size<=22){
  this.size=this.size++ + 2;
  this.value2="visible";
  this.value1="visible";
    }
    if(this.size>=24){
      this.value2="hidden";
      this.value1="visible";
    }
    
  }
  subtraction(){
    if(this.size>=18){
    this.size= this.size-- -2;
    this.value1="visible";
    this.value2="visible";
    }
    if(this.size<=16){
      this.value1="hidden";
      this.value2="visible";
    }
   
   }
  // box = document.getElementsByClassName(":host ::ng-deep .slide .mat-slider-thumb");
  // range=document.getElementsByClassName("slide").;
   ngOnInit(): void {
  }

  displaylogin=true;
  getlogin(){
      this.displaylogin=false;
  }

  v:any;
  function1(){
    this.v = document.querySelector("select")?.value;
  }




}
