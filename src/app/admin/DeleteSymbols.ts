import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'deleteSymbol'
    
})


export class converttoupper implements PipeTransform{
    s='';
    transform(value: string):string
     {
        for(let i=0;i<value.length;i++){
       if(value.charAt(i)>='A' && value.charAt(i)<='Z' ||value.charAt(i)>='a'&& value.charAt(i)<='z')
       {
           this.s=this.s+value.charAt(i);
       }    
       }
       return this.s;
    }
  

}