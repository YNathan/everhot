import { Component, OnInit, Input } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UploadFileService} from './upload-file.service';
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
import {Globals} from '../globals';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  array = ["קרית משה","פסגת זאב מזרח","פסגת זאב צפון","גילה","בית נקופה","קרית משה","רחביה"];
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
  selectedImage;
  selectedPhotosArray = [];
  selectedKsImages = [];
  showPreview = false;

  plainGalleryGrid: PlainGalleryConfig;
  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '200px', height: '200px' }, { length: 6, wrap: true }, 'center')
  };
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
        for (const i in fileUploads) {
          const arr = fileUploads[i].name.split(' ');
          let areaName = '';
          for (let idx = 0; idx < arr.length - 1; idx++) {
            areaName += arr[idx];
            if (idx !== arr.length - 2) {
              areaName += ' ';
            }
          }
          if (!this.areas.includes(areaName)) {
            this.areas.push(areaName);
          }
        }
        for (const areaIdx in this.areas) {
          const album = {'areaName': this.areas[areaIdx], 'photos': []};
          for (const fileIdx in fileUploads) {

            const arr = fileUploads[fileIdx].name.split(' ');
            let areaName = '';
            for (let idx = 0; idx < arr.length - 1; idx++) {
              areaName += arr[idx];
              if (idx !== arr.length - 2) {
                areaName += ' ';
              }
            }

            if (areaName === this.areas[areaIdx]) {
              album.photos.push(fileUploads[fileIdx]);
            }
          }
          this.albums.push(album);
        }
      }
    );
  }


  setSelectedImage(photosArray, image) {
    this.selectedPhotosArray = photosArray;
    this.selectedImage = image;
  }


  navigate(forward) {
    const index = this.selectedPhotosArray.indexOf(this.selectedImage) + (forward ? 1 : -1);
    if (index >= 0 && index < this.selectedPhotosArray.length) {
      this.selectedImage = this.selectedPhotosArray[index];
    }
  }


  setSelectedArea(area: any) {
    this.showPreview = true;
    this.selectedArea = area;
    for (const i in this.albums) {
      if (this.albums[i].areaName === area) {
        this.selectedAlbum = this.albums[i].photos;
        this.selectedKsImages = [];
        for (const ksi in this.albums[i].photos) {
          this.selectedKsImages.push(new Image(parseInt(ksi), {img: this.albums[i].photos[ksi].url}));
        }
      }
    }
  }

}
