import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  // stopFlag = false;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  interval;
  incrementingNumber : number = 1;
  @Output() intervalGame = new EventEmitter<number>();
  onStartGame(){
    // important note: 
    // inner function does not hold outer this. but 
    // ()=> arrow function preserve the value of outer this.
    this.interval = setInterval(()=>{
      console.log('Emitting data :'+ this.incrementingNumber);
      this.intervalGame.emit(this.incrementingNumber);
      this.incrementingNumber++;
    },700);
  }
  onPauseGame(){
    clearInterval(this.interval);
  }

}
