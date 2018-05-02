import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private incrementingNumber : number = 1;
  @Output() game = new EventEmitter<number>();
  stopFlag = false;
  
  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    console.log('staring game');
    this.stopFlag=false;
    while(!this.stopFlag){
      setInterval(function(){
        this.game.emit(this.incrementingNumber);
      },1000);
    }
  }
  onStopGame(){
    this.stopFlag=true;
  }

}
