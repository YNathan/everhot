import {Component, OnInit} from '@angular/core';
import {Globals} from '../globals';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor(public globals: Globals) {
  }

  pdfHebSrc: string = '/assets/pdfs/' + this.globals.languageSelected + '/EverHotGuide.pdf';

  ngOnInit() {
  }

}
