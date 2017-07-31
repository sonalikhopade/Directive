import { Component,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day';

songs =[
    "assets\song1.mp3","assets\song2.mp3","assets\song3.mp3","assets\song4.mp3","assets\song5.mp3","assets\song6.mp3"
  ];


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
