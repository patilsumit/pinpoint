import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PinpointserviceService {

  private myURL='https://7q5ep2tbv7.execute-api.ap-south-1.amazonaws.com/default/Pinpoint-Generator';
  constructor(private http:HttpClient) { }

  getProject(){
    return this.http.get(this.myURL);   
  }

  addProject(info){  
   return this.http.post(this.myURL,info); 
  }
  
}
