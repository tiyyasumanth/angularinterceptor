import { Component } from '@angular/core';
import { RequesthanService } from './intercept-authe/requesthan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dserv:RequesthanService){

  }
  title = 'interceptor-aut';
  api1(){
     this.dserv.fetch().subscribe(data=>console.log(data));
     
  }
  api2(){
    this.dserv.fetchdetails().subscribe(data=>console.log(data));
  }
}
