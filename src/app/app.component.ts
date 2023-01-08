import { Component, VERSION } from '@angular/core';
import {
  Observable,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
} from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  obsData;
  subData;
  obsData1;
  subData1;
  bSubData;
  rSubData;
  bSub = new BehaviorSubject(1);
  rSub = new ReplaySubject(3);
  aSub = new AsyncSubject();
  aSubData;

  // Create Observable with subscription
  createObs() {
    let obs = new Observable((observer) => {
      observer.next(Math.floor(Math.random() * 10) + 1);
    });
    obs.subscribe((data) => {
      console.log('ObsData => ', data);
      this.obsData = data;
    });

    obs.subscribe((data) => {
      console.log('ObsData => ', data);
      this.obsData1 = data;
    });
  }
  // Create Subject with subscription
  createSub() {
    let sub = new Subject();
    sub.subscribe((subData) => {
      console.log('SubData => ', subData);
      this.subData = subData;
    });
    sub.next(Math.floor(Math.random() * 10) + 1);
    // let sub1 = new Subject();
    sub.subscribe((subData) => {
      console.log('SubData => ', subData);
      this.subData1 = subData;
    });
    sub.next(Math.floor(Math.random() * 10) + 1);
  }
  // Create BehaviorSubject with subscription
  createBSub() {
    // For BehaviorSubject we can set initial value at the time of instantitation and it will consider latest value before subscription
    this.bSub.next(20);
    this.bSub.next(21);
    this.bSub.subscribe((x) => {
      console.log(x);
      this.bSubData = x;
    });
  }
  // Create ReplaySubject with subscription
  createRSub() {
    // For replay subject latest values with count specified at the time of instantiation are considered
    this.rSub.next(21);
    this.rSub.next(11);
    this.rSub.subscribe((x) => {
      console.log(x);
      this.rSubData = x;
    });
  }
  // Create AsyncSubject with subscription
  createASub() {
    // For async subject only latest value before completion is considered
    this.aSub.next(21);
    this.aSub.next(11);
    this.aSub.complete();
    this.aSub.next(18);
    this.aSub.subscribe((x) => {
      console.log(x);
      this.aSubData = x;
    });
  }
}
