import {Component, Input, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {UploadFileService} from '../upload-file.service';

@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  albums = [];
  areas = [];

  constructor(private uploadService: UploadFileService) {
  }


  ngOnInit() {
    // Use snapshotChanges().pipe(map()) to store the key
    this.uploadService.getFileUploads(6).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    ).subscribe(fileUploads => {

        for (let i in fileUploads) {
          let areaName = fileUploads[i].name.split('.')[0].slice(0, -4);
          if (!this.areas.includes(areaName)) {
            this.areas.push(areaName);
          }
        }
        for (let areaIdx in this.areas) {
          let album = {'areaName': this.areas[areaIdx], 'photos': []};
          for (let fileIdx in fileUploads) {
            let areaName = fileUploads[fileIdx].name.split('.')[0].slice(0, -4);
            if (areaName == this.areas[areaIdx]) {
              album.photos.push(fileUploads[fileIdx]);
            }
          }
          this.albums.push(album);
        }
      }
    );
  }

  selectedImage;
  selectedPhotosArray = [];

  setSelectedImage(photosArray, image) {
    this.selectedPhotosArray = photosArray;
    this.selectedImage = image;
  }


  navigate(forward) {
    var index = this.selectedPhotosArray.indexOf(this.selectedImage) + (forward ? 1 : -1);
    if (index >= 0 && index < this.selectedPhotosArray.length) {
      this.selectedImage = this.selectedPhotosArray[index];
    }
  }
}
