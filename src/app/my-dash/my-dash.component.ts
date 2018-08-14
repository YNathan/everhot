import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Globals} from '../globals';
import {ModalService} from '../modal.service';

@Component({
  selector: 'my-dash',
  templateUrl: './my-dash.component.html',
  styleUrls: ['./my-dash.component.css']
})
export class MyDashComponent implements OnInit, AfterViewInit {

  waterWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
   if (window.screen.width > 1200) {
      this.waterWidth = 130;
    } else {
      this.waterWidth = 100;
    }
    document.getElementById("blbl").style.width = '100%';
   // this.waterWidth = window.screen.width;
  }

  @ViewChildren('heroimage') divs: ElementRef;

  constructor(public globals: Globals, private el: ElementRef, private renderer: Renderer2, private modal: ModalService) {
   /* if (window.screen.width > 1200) {
      this.waterWidth = 130;
    } else {
      this.waterWidth = 100;
    }*/
   // this.waterWidth = window.screen.width;
  }

  url: any;

  imageHero: any;

  ngOnInit(): void {
    this.url = '/assets/main1.jpg';
    document.getElementById("blbl").style.width = '100%';
  }

  ngAfterViewInit() {
    document.getElementById("blbl").style.width = '100%';
  }

  openModal(str: any) {
    // this.modal.open(str);
  }
}
