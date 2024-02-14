 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
@Injectable({
    providedIn: 'root'
 })
export class ServiceEnquiryService {
  Url='https://localhost:44310/Manoj';
  Url1='https://localhost:44310/Manoj/';
constructor(private httpClient:HttpClient){}

getData():Observable<any>{
  return this.httpClient.get<any>('https://localhost:44310/Manoj');
}

onSubmit(data: any){
  return this.httpClient.post('https://localhost:44310/Manoj/',data); 
}


deleteItem(id:number){
  
  return this.httpClient.delete(`${this.Url}/${id}`);
}

updatevalue(id:any){
   const value=id;
  return this.httpClient.put(this.Url1+value,id);
}
 


}



