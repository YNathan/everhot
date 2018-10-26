import { Component, OnInit, Input } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Globals} from '../globals';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  url = '/assets/main2.jpg';

  constructor() { }


  ngOnInit(): void {
  }
}
