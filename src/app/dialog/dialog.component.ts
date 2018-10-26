import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from '../DialogData';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Globals } from '../globals';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public globals: Globals) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
