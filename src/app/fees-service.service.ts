import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFees } from './Ifees';

@Injectable({
  providedIn: 'root'
})
export class FeesServiceService {
  Url:string ='https://localhost:44369/Fees';
  postUrl:string='https://localhost:7207/Feesform'
  constructor(private http:HttpClient) {}
    viewdata(value:string): Observable<any[]>{
      return this.http.get<any>(this.Url+value);
    }
    addFeesData(val: IFees) {
      return this.http.post(this.postUrl,val);  
    }
   
}
