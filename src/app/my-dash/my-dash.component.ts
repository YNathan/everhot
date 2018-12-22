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
    if(this.globals.languageSelected == 'hebrew'){
      this.url = '/assets/mainHe.jpg';
    }else{
      this.url = '/assets/mainEn.jpg'; 
    }
   
    //document.getElementById("blbl").style.width = '100%';
  }

  ngAfterViewInit() {
    //document.getElementById("blbl").style.width = '100%';
  }

  openDialog(name): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      direction : "rtl",
      data: {name: name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
   
      this.animal = result;
    });
  }

}