import { Component, OnInit, ViewChild } from '@angular/core';
import { Pinpoint } from '../Pinpoint';
import { PinpointserviceService } from '../pinpointservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pinpoints:any[];
  pinpoint:Pinpoint={
    name:''
  }
  constructor(private service:PinpointserviceService) { }
   
  @ViewChild('todoForm', {static: false}) form:any; 
  ngOnInit() { 
    
    this.service.getProject().subscribe((response:Pinpoint[]) =>{ 
      this.pinpoints=response;    
      console.log("Data Fetched!"); 
    })
  
  }

  addProject(todoForm){
    this.service.addProject(this.pinpoint).subscribe((response) => {
       console.log('Data Inserted!!!')
    })
  }
  
}
