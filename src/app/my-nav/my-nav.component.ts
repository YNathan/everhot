import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Globals} from '../globals';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
   displayimage = true;
   galleryName = "";//globals.languageSelected == 'hebrew' ? 'גלריה' : 'gallery'";
   guideName = "";
   contactName = "";


  constructor(private breakpointObserver: BreakpointObserver, public globals: Globals) {
  }

  ngOnInit(): void {
  }

  dontShowImage() {
    this.displayimage = false;
  }
}
