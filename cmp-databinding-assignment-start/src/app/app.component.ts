import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers : number[] = [];
  evenNumbers : number[] = [];
  onGameEvent(eventNumber:any){
    if(eventNumber % 2==1){
      this.oddNumbers.push(eventNumber);
    }else{
      this.evenNumbers.push(eventNumber);
    }
  }
}
