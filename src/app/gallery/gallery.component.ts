import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service'
//whats onChanges? A lifecycle hook; called when something within the component changes

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnChanges { //what does implements do? :55
  // implements defines interaces? implements means interfaces?
  title = 'Recent Photos';

  @Input() images:any[]; //secondary edit
  
  @Input() filterBy?: string = 'all' //:55; this will filter the categories and display only those pics

  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages()
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  } //What to do when visibleImages CHANGES; it'll retrieve the images
}
