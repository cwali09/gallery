//imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap'
import { appRoutes } from '../routes';
import { RouterModule } from '@angular/router';



// declarations
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'
import { GalleryComponent } from './gallery/gallery.component'
import { ImageDetailComponent } from './image/image-detail.component'


//providers
import { ImageService } from './image/shared/image.service'
import { ImageFilterPipe } from './image/shared/filter.pipe'
//also declared^^

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageFilterPipe,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
