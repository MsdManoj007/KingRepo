import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
  
export class CourseComponent implements OnInit {

  index=0;
  
  constructor() {
    
   }

  ngOnInit(): void {
  }
  displayname='';
  displaydeg='';
  displayfed='';
getname(valuename:string,valuedegree:string,valuefeedback:string){
this.displayname=valuename;
this.displaydeg=valuedegree;
this.displayfed=valuefeedback;
}
  
  
  
  

  
}
