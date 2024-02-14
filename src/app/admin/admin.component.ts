import { Component, OnInit } from '@angular/core';
import { ServiceEnquiryService } from '../enquiry/service-enquiry.service';
import { EnquiryModel } from './Admin.model';
import{interval} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  [x: string]: any;

  EnquiryList: EnquiryModel[] = [];
 
  constructor(private ServiceEnquiryService:ServiceEnquiryService,private route:ActivatedRoute) { 
  }
  name:any;
  colors:any[]=['red','green','blue','yellow','orange'];
  displayName!:string;
  ngOnInit(): void {
   this.ServiceEnquiryService.getData();
    this.getData();
  
   this.route.queryParams.subscribe((params:any)=>{
    console.log(params)
    this.displayName=params.data;
   })
  }
  getData(): void {
    this.ServiceEnquiryService.getData().subscribe(res => {
      console.log(res);
      this.EnquiryList = res;
      console.log(this.EnquiryList);
    })
  }
 
  deleteItem(id: number,value:string) {
 
    if(value=="completed!!!"){
    this.ServiceEnquiryService.deleteItem(id).subscribe(res => {
    console.log(res);
    window.location.reload();
    })
  }
  
  else{
   
    alert(this.displayName.toUpperCase()+" Please Rechecked.. It is INCOMPLETE")
  }
  }
 
  updatevalue(id:number ,value:string){
    if(value=="Pending!!!"){
    this.ServiceEnquiryService.updatevalue(id).subscribe(res => {
      console.log(res);
      window.location.reload();

      })
    }
    else{
      alert("This Enquiry Already Updated")
    }
  }
 
}
