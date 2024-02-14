import { Component, OnInit } from '@angular/core';
import { ServiceEnquiryService } from '../enquiry/service-enquiry.service';
import{interval, timer} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup , FormControl,Validators } from '@angular/forms';


declare var window:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup 
  constructor(private ServiceEnquiryService:ServiceEnquiryService,private router:Router) { 
  }
formModal:any;
  ngOnInit(): void {
  
   this.getcolor();
  }

  texting='';
displayresult='';
name!:string;
userName:any;
indexs=0;
emoji="";
hiding='visible'
emojis:string[]=['🤨','😑','😠','😡'];
num=0;
hiding1='';
count=10;
trybtn=false;
getvalue(value1:string ,value2:string){
  this.hiding='visible'
    if(value1=='msdmanojkumar007@gmail.com' && value2=='manoj')
    {
      this.displayresult='../admin';
      this.router.navigate(['admin'],{queryParams:{data:this.userName}})
    }
    else{
      if(this.indexs<this.emojis.length)
      {
      this.emoji=this.emojis[this.indexs++]
      }
      else{
        const obs$=interval(1000)
         obs$.subscribe((d):any=>{
          this.hiding1='visible'
          if(d>=10){
            this.hiding1='hidden'
            this.trybtn=true;  
           }
           else{
           
           
            this.hiding1='visible';
           }
          this.texting="Wait for the time "+"00:"+(this.count-d);
         
         })
        
        
        this.hiding='hidden';
        this.emoji=this.emojis[this.indexs-1];
        console.log(this.indexs);
       
      }
      // this.displayresult='invalid';
      // alert("Incorrect Email or Password !!!")
    }
   
}
// getvalue(){
//   this.router.navigate(['admin'],{queryParams:{data:this.userName}})
// }
index=-2;
color='';
colors:any[]=['Violet','Indigo','Blue','Green','Yellow','Orange','Red'];
getcolor(){

  const obs$=interval(500)
  obs$.subscribe((d)=>{
    console.log(d);
    this.color=this.colors[this.index++];
    console.log(this.colors[this.index])
    if(this.index>this.colors.length){
      this.index=0;
     
    }
  })

}
hide="hide";
show="show";
imgs=true;
text1="password";
text2="text";
changing(){
this.imgs=!this.imgs;
}

call(){
  window.location.reload();
}

}

