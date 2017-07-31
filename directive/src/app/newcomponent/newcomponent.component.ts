import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit {

@Output()
abc:EventEmitter<string>

  constructor() { 
this.abc=new EventEmitter<string>()


  }

  ngOnInit() {
  }

  follow(x:string){


    this.abc.emit(x);

  }

}
