import { Component, OnInit } from '@angular/core';
import { ImagesService } from "../../core/services/images/images.service";

import { Hits, Image } from "../../core/models/hits.model";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Image[]
  dataHits: Hits
  constructor(
    private imagesService: ImagesService
  ) { }

  ngOnInit(): void {
    this.fetchImage()
  }
  fetchImage(){
    this.imagesService.getImages()
    .subscribe(allHits => {
      this.images = allHits.hits
      console.log(this.images);
    })
  }
  viewImage(image: Image){
    this.imagesService.selectImage(image)
  }

}
