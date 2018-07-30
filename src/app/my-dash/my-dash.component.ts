import {AfterViewInit, Component, Directive, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {Globals} from '../globals';

@Component({
  selector: 'my-dash',
  templateUrl: './my-dash.component.html',
  styleUrls: ['./my-dash.component.css']
})
export class MyDashComponent implements OnInit, AfterViewInit {

  @ViewChildren('heroimage') divs: ElementRef;

  constructor(public globals: Globals, private el: ElementRef, private renderer: Renderer2) {
  }

  url: any;

  imageHero: any;

  ngOnInit(): void {
    this.url = '/assets/main1.jpg';
    let i = 0;
    const images = [
      '/assets/main1.jpg',
      '/assets/main2.jpg',
      '/assets/main3.jpg',
      '/assets/PANEL.png',
    ];
    setInterval(function () {
        this.url = images[i];
      i = i + 1;
      if (i === images.length) {
        i = 0;
      }
    }, 1000);
  }

  ngAfterViewInit() {
  }

}
