import { Component,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day';


xyz:boolean;
pqr:boolean;


@Input()
  imgstr:string;
 imgstr1:string;
 imgstr2:string;

constructor(){
  
}


// audioPlayer(){
//  ("audioplayer")[0].src = ("playList li a")[0];
//  ("audioplayer")[0].play();
//  ("audioplayer")[0].click(function(e){
//    e.preventDefault();
//     ("audioplayer")[0].src=this;
//  });
// }

//   newfunction(){
//     this.xyz= !this.xyz;
//     this.pqr= !this.pqr;
//   }


}
