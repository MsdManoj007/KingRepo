import { Component, OnInit } from '@angular/core';
import{interval, timer} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.index=-1;
    const obs$=interval(1200)
    obs$.subscribe((d):any=>{
      this.index++;
      console.log(this.index);
      this.imgurl=this.images[this.index];
      if(this.index >=6)
      {
      this.index=-1;
      }
      })

this.imgurl="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHw%3D&w=1000&q=80";
  }
  images:string[]=["https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHw%3D&w=1000&q=80",
                    "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/3186386/pexels-photo-3186386.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/798721/pexels-photo-798721.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/3755760/pexels-photo-3755760.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=600"];

  index=0;
  imgurl="";

  leftbutton()
  {
    if(this.index <= 0)
    {
      this.index=7;
    }
    this.index=this.index-1;
   this.imgurl= this.images[this.index];
  }

  
  rigthbutton()
  {
    if(this.index >=6){
      this.index=-1;
    }
    this.index=this.index+1;
    this.imgurl= this.images[this.index];
   
    console.log(this.imgurl);
  }
}
