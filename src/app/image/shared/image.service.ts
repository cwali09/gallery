import { Injectable } from '@angular/core';

@Injectable()
export class ImageService{
  visibleImages = [];
  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id == id)
  }


}

const IMAGES = [
  {"id": 1, "category": "murcielago", "caption": "Yellow Murci", "url": "assets/img/car1.jpg"},
  {"id": 2, "category": "aventador", "caption": "aventador", "url": "assets/img/car2.jpg"},
  {"id": 3, "category": "aventador", "caption": "aventador", "url": "assets/img/car3.jpg"},
  {"id": 4, "category": "huracan", "caption": "aventador", "url": "assets/img/car4.jpg"},
  {"id": 5, "category": "murcielago", "caption": "Italian Murci", "url": "assets/img/car5.jpg"},
  {"id": 6, "category": "huracan", "caption": "Orange Huracan Back", "url": "assets/img/car6.jpg"},
  {"id": 7, "category": "huracan", "caption": "Orange Huracan Front", "url": "assets/img/car7.jpg"},
  {"id": 8, "category": "huracan", "caption": "Stormy Black-Huracan", "url": "assets/img/car8.jpg"},
]
//this will hold our images
