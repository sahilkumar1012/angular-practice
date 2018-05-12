import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{

  numberObsSubscription:Subscription;
  customObsSubscription:Subscription;

  constructor() { }

  ngOnInit() {
    // map is a observable operator here. 
    const myNumber = Observable.interval(1000)
      .map(                  // used to do some modification in the data from observable
        (data:number)=>{ return data *2;}
      );
    this.numberObsSubscription=myNumber.subscribe(
      (number:number)=>{
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first packet.');
      }, 2000);
      setTimeout(() => {
        observer.next('second packet');
      }, 3000);
      setTimeout(() => {
        // observer.error('error packet');
        observer.complete();    // nothing to do after completion 
      }, 4000);
      setTimeout(() => {
        observer.error('error in the system.')
      }, 5000);
    });
    this.customObsSubscription=myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('It\'s completed');
      }
    );
  }
  
  ngOnDestroy(){
    this.customObsSubscription.unsubscribe();
    this.numberObsSubscription.unsubscribe();
  }


  // callback for normal data, errors, completion 
}
