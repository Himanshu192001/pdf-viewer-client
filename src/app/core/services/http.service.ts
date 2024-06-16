import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../enviroments/environment";
const LOCALURL = environment.apilocalUlr;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  getReq(url : String , headers : any = {}) : Observable<any>
  {
    return this.http.get(`${LOCALURL}/${url}` , headers);
  }

  postReq(url : String , payload : any) : Observable<any>
  {
    return this.http.post(`${LOCALURL}/${url}` , payload);
  }

  patchReq(url : String  , payload : any) : Observable<any>
  {
    return this.http.patch(`${LOCALURL}/${url}` , payload);
  } 

  putReq(url : String , payload : any ): Observable<any>
  {
    return this.http.put(`${LOCALURL}/${url}` , payload);
  } 

  deleteReq(url : String) : Observable<any>
  {
    return this.http.delete(`${LOCALURL}/${url}`);
  }

}
