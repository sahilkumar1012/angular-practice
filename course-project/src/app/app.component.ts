import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // loadedFeature:string ='recipe';

  // onNavigate(loadedFeature:any){
  //   this.loadedFeature=loadedFeature;
  // }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBsttkCiZL_TNIzLHJR_RvWG289tv51_BU",
      authDomain: "ng-recipe-book-sk.firebaseapp.com"
    }
    );
  }

}
