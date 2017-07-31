import { Component, OnInit,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  imgStr:string;
  @Output()
  emi:EventEmitter<string>;
  
  constructor() {
    this.emi = new EventEmitter<string>()
  
   }

  ngOnInit() {
  }
sendPath(x:string){

this.emi.emit(x);

}


}
