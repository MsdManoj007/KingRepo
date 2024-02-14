import { Component, OnInit } from '@angular/core';
import{interval} from 'rxjs';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor() { }
  desval1='rotate(';
  desval2='deg)';
deg='';
num=50;
s='scale(1)';
totalval:string=this.desval1+this.deg+this.desval2;

count=1;
index1=0;
index2=1;
index3=2;
index4=3;
index5=4;
index6=5;
index7=6;
index8=7;

  ngOnInit(): void 
  {
    this.index1=1;
    this.index2=2;
    this.index3=3;
    this.index4=4;
    this.index5=5;
    this.index6=6;
    this.index7=7;
    this.index8=8;

    const obs$=interval(2000) 
    obs$.subscribe((d)=>{

    this.index1=this.index1+1;
     console.log(this.index1)
     if(this.index1>8){
      this.index1=1;
     }

     this.index2=this.index2+1;
     console.log(this.index2);
     if(this.index2>8)
     {
      this.index2=1;
     }

     this.index3=this.index3+1;
     console.log(this.index3);
     if(this.index3>8)
     {
      this.index3=1;
     }
     
     this.index4=this.index4+1;
     console.log(this.index4);
     if(this.index4>8)
     {
      this.index4=1;
     }


     this.index5=this.index5+1;
     console.log(this.index5)
     if(this.index5>8)
     {
      this.index5=1;
     }

    this.index6=this.index6+1;
    console.log(this.index6)
    if(this.index6>8)
    {
      this.index6=1;
    }

    this.index7=this.index7+1;
    console.log(this.index7)
    if(this.index7>8)
    {
      this.index7=1;
    }
    this.index8=this.index8+1;
    console.log(this.index8);
    if(this.index8>8)
    {
      this.index8=1;
    }
    })
 
     this.getdegree();
  }
  dvalue=0;
  getdegree(){
     const obs$=interval(this.num) 
    obs$.subscribe((d)=>{
     this.totalval=this.desval1+this.deg+d+this.desval2;
      this.dvalue=d+this.dvalue;
    })
   
  }
  imagewidth=350;

  imgwidth=100;

}
