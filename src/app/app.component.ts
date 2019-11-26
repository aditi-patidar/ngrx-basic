import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDFCQLtu0AP-wt3J4GhTPzC04OV3zXXeF8',
      authDomain: 'test-app-6b3a2'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
