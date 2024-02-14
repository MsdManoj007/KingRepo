import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEnquiry } from './EnquiryInterface';
import { Enquiry } from './EnquiryModel.model';
import { ServiceEnquiryService } from './service-enquiry.service';
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})


export class EnquiryComponent implements OnInit {

  name = "angular";
  todo: any;


  constructor(private ServiceEnquiryService: ServiceEnquiryService) {



  }


  EnquiryList: Enquiry[] = [];
  Enquiries = new Enquiry();


  onSubmit(): void {
    this.ServiceEnquiryService.onSubmit(this.Enquiries).subscribe(res => {
      console.log(res);
      window.location.reload();
      alert("UPDATE SUCCESSFULLY COMPLETED !!!")
    })
  }

  getData(): void {
    this.ServiceEnquiryService.getData().subscribe(res => {
      console.log(res);
      this.EnquiryList = res;
      console.log(this.EnquiryList);
    })
  }
  ngOnInit(): void {

    this.getData();
  }
msg:boolean=false;
  deleteItem(id: number) {
    this.ServiceEnquiryService.deleteItem(id).subscribe(res => {
    console.log(res);
    })
  }
  updatevalue(id:number){
    this.ServiceEnquiryService.updatevalue(id).subscribe(res => {
      console.log(res);
      window.location.reload();
      })
  }


  // DeleteItem(data:any){
  // console.log(data);
  //     this.EnquiryList.splice(data-1,1);
  // this.ServiceEnquiryService.DeleteItem(data).subscribe((res)=>{
  //   console.warn("result",res)
  //})
  // }
}


