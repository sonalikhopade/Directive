import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

@Output()
emi:EventEmitter<string>


  constructor() {
    this.emi= new EventEmitter<string>()

   }

  ngOnInit() {
  }
sendPath(x:string){

this.emi.emit(x)
}


}

