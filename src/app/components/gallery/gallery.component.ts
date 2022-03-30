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
  word: string
  constructor(
    private imagesService: ImagesService
  ) {
    this.imagesService.wordToSearch$.subscribe(word => {
      this.word = word
      this.fetchImage()
      this.imagesService.selectImage({id: 0})
    })
  }

  ngOnInit(): void {
    this.fetchImage()
  }
  fetchImage(){
    this.imagesService.getImages(this.word)
    .subscribe(allHits => {
      this.images = allHits.hits
    })
  }
  viewImage(image: Image){
    this.imagesService.selectImage(image)
  }

}
