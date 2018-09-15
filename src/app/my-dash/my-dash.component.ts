import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { Globals } from '../globals';
import {MatDialog} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
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
  }


  constructor(public globals: Globals,public dialog: MatDialog) {
  }

  animal: string;
  name: string;
  url: any;

  imageHero: any;

  ngOnInit(): void {
    this.url = '/assets/main1.jpg';
    document.getElementById("blbl").style.width = '100%';
  }

  ngAfterViewInit() {
    document.getElementById("blbl").style.width = '100%';
  }

  openDialog(name): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}