import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Globals} from '../globals';
import { SimplePdfViewerComponent, SimplePDFBookmark } from 'simple-pdf-viewer';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit,AfterViewInit {
  

  constructor(public globals: Globals) {
  }
  url = '/assets/main2.jpg';
  pdfHebSrc: string = '/assets/pdfs/' + this.globals.languageSelected + '/EverHotGuide.pdf';

  ngOnInit() {
    this.pdfViewer.zoomOut();
    this.pdfViewer.zoomOut();
    this.pdfViewer.zoomOut();
  }
  ngAfterInit() {
    this.pdfViewer.zoomOut();
    this.pdfViewer.zoomOut();
    this.pdfViewer.zoomOut();
  }

  @ViewChild(SimplePdfViewerComponent) private pdfViewer: SimplePdfViewerComponent;
  bookmarks: SimplePDFBookmark[] = [];

  // how to open PDF document
  openDocument(document: File) {
    const fileReader: FileReader = new FileReader();
    fileReader.onload = () => {
      this.pdfViewer.openDocument(new Uint8Array(fileReader.result));
    };
    fileReader.readAsArrayBuffer(document);
  }

  // how to create bookmark
  createBookmark() {
    this.pdfViewer.createBookmark().then(bookmark => {
      if(bookmark) {
        this.bookmarks.push(bookmark);
      }
    })
  }
  ngAfterContentInit(){
    this.pdfViewer.zoomOut();
    this.pdfViewer.zoomOut();
    this.pdfViewer.zoomOut();
  }
  ngAfterViewInit(){
    this.pdfViewer.zoomOut();
    this.pdfViewer.zoomOut();
    this.pdfViewer.zoomOut();
  }

}
