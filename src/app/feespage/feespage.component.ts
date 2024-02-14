import { Component, OnInit } from '@angular/core';
import { FeesServiceService } from '../fees-service.service';
import { IFees } from '../Ifees';

@Component({
  selector: 'app-feespage',
  templateUrl: './feespage.component.html',
  styleUrls: ['./feespage.component.css']
})
export class FeespageComponent implements OnInit {
  constructor(private service:FeesServiceService) {
  }
  v:string="";
  s:string="";
  displaying="block";
  feesData:IFees[]=[];
check(value1:string,value2:string)
{
  this.s="/"+value1+"/"+value2;
  this.service.viewdata(this.s).subscribe(res=>{
    console.log(res);
    this.feesData=res;
    this.displaying="none";
  })
}
  
  

  ngOnInit(): void {
  }
 
}
