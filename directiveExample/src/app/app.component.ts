import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
xyz:boolean;
pqr:boolean;

  ngOnInit(){

  }

  newfunction(){
    this.xyz= !this.xyz;
    this.pqr= !this.pqr;
  }

}
