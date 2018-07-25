import {Component} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  files: any;

  constructor(rt: Router) {
    rt.navigate(['/dashboard']);
  }
}
