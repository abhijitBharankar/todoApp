import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  
  constructor(private httpClient : HttpClient) { }
  
  postApiCall(url:any, data:any){
    return this.httpClient.post(url,data)
  }
  
  getApiCall(url: any){
    return this.httpClient.get(url)
  }

  deleteApiCall(url: any) {
    return this.httpClient.delete(url)
  }
}
