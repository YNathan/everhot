import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyDashComponent} from './my-dash/my-dash.component';
import {MyNavComponent} from './my-nav/my-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {GuideComponent} from './guide/guide.component';
import {RouterModule, Routes} from '@angular/router';
import {Globals} from './globals';
import {ContactComponent} from './contact/contact.component';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {GalleryComponent} from './gallery/gallery.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import {ListUploadComponent} from './upload/list-upload/list-upload.component';
import {FormUploadComponent} from './upload/form-upload/form-upload.component';
import {DetailsUploadComponent} from './upload/details-upload/details-upload.component';
// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // <------ mandatory dependency for angular-modal-gallery
import 'mousetrap'; // <------ mandatory dependency for angular-modal-gallery
import {ModalGalleryModule} from 'angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

// ************************ optional font-awesome 5 ************************
// to install use both `npm i --save @fortawesome/fontawesome` and `npm i --save @fortawesome/fontawesome-free-solid`
import {faExternalLinkAlt, faPlus, faTimes, faDownload} from '@fortawesome/fontawesome-free-solid';
import * as fontawesome from '@fortawesome/fontawesome';

fontawesome.library.add(faExternalLinkAlt, faPlus, faTimes, faDownload);
// *************************************************************************

const appRoutes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'dashboard', component: MyDashComponent},
  {path: 'guide', component: GuideComponent},
  {
    path: 'contact',
    redirectTo: '/contact',
    pathMatch: 'full'
  }, {
    path: 'guide',
    redirectTo: '/guide',
    pathMatch: 'full'
  }, {
    path: 'gallery',
    redirectTo: '/gallery',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    MyDashComponent,
    MyNavComponent,
    GuideComponent,
    ContactComponent,
    GalleryComponent,
    ListUploadComponent,
    FormUploadComponent,
    DetailsUploadComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    ModalGalleryModule.forRoot(), // <----------------- angular-modal-gallery module import
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    Angular2ImageGalleryModule,
    PdfViewerModule,
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule {
}
