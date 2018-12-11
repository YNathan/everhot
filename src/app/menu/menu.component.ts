import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit() {
  }
  doSomething(evt){
    console.log(evt);
  }
}
