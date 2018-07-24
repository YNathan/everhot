import {Component} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  files: any;

  constructor(db: AngularFireDatabase) {
    this.files = db.list('/files').valueChanges().subscribe(files => {
      console.log(files);
    });
    console.log(this.files);
  }
}
