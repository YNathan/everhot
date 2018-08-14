import {Component, Input, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {UploadFileService} from '../upload-file.service';
import {
  AccessibilityConfig,
  Action,
  AdvancedLayout,
  ButtonEvent,
  ButtonsConfig,
  ButtonsStrategy,
  ButtonType,
  Description,
  DescriptionStrategy,
  GalleryService,
  DotsConfig,
  GridLayout,
  Image,
  ImageModalEvent,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  PreviewConfig
} from '@ks89/angular-modal-gallery';
import {Globals} from '../../globals';


@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  albums = [];
  areas = [];
  selectedArea = null;
  selectedAlbum = [];
  panelOpenState = false;
  mobHeight: any;
  mobWidth: any;
  accWidth = window.screen.width / 1.1;

  /*
   h: 720px
   w: 1280px

   h: 640px
   w: 360px
   */
  plainGalleryGrid: PlainGalleryConfig;

  constructor(private uploadService: UploadFileService, public golbals: Globals) {
    if (window.screen.width > 700) {
      this.plainGalleryGrid = {
        strategy: PlainGalleryStrategy.GRID,
        layout: new GridLayout({width: window.screen.width / 3.4 + 'px', height: window.screen.width / 3.4 + 'px'}, {length: 3, wrap: true})
      };
    } else {
      this.accWidth = window.screen.width / 1.2;
      this.plainGalleryGrid = {
        strategy: PlainGalleryStrategy.GRID,
        layout: new GridLayout({width: window.screen.width / 1.7 + 'px', height: window.screen.width / 1.7 + 'px'}, {length: 1, wrap: true})
      };
    }
  }

  ngOnInit() {
    // Use snapshotChanges().pipe(map()) to store the key
    this.uploadService.getFileUploads(1000).snapshotChanges().pipe(
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

  selectedKsImages = [];

  setSelectedArea(area: any) {
    this.selectedArea = area;
    for (let i in this.albums) {
      if (this.albums[i].areaName === area) {
        this.selectedAlbum = this.albums[i].photos;
        this.selectedKsImages = [];
        for (let ksi in this.albums[i].photos) {
          this.selectedKsImages.push(new Image(parseInt(ksi), {img: this.albums[i].photos[ksi].url}));
        }
      }
    }
  }
}
