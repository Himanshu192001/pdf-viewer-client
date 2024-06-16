import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : HttpService) { }

  createDoc(payload : any ) : Observable<any>
  {
    return this.httpService.postReq('user/create' , payload);
  }

  editDoc(payload : any , id : string) : Observable<any>
  {
    return this.httpService.putReq(`user/edit/${id}` , payload);
  }

  delete(id : String ) : Observable<any>
  {
    return this.httpService.deleteReq(`user/remove/${id}`);
  }

  getList( search : String | undefined = undefined , page : any = 1  , limit : any = 10 , ) : Observable<any>
  {
    let url = `user?&page=${page}&limit=${limit}`;
    search ? url = url + `&search=${search}`  :url;
    return this.httpService.getReq(url);
  }

  getDetails(id : String ) : Observable<any>
  {
    return this.httpService.getReq(`user/${id}`);
  }

  generatePdf(search : String | undefined = undefined , page : any = 1  , limit : any = 10 , ) : Observable<any>
  {
    let url = `user/generate-pdf?&page=${page}&limit=${limit}`;
    search ? url = url + `&search=${search}`  :url;
    return this.httpService.getReq(url , { responseType: 'arraybuffer' });
  }
}
