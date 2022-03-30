import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/core/models/hits.model';

import { ImagesService } from "../../core/services/images/images.service";

@Component({
  selector: 'app-selected-image',
  templateUrl: './selected-image.component.html',
  styleUrls: ['./selected-image.component.css']
})
export class SelectedImageComponent implements OnInit {

  selectedImage: Image

  constructor(
    private imagesService: ImagesService
  ) {
    this.imagesService.selectedImage$.subscribe(image => {
      this.selectedImage = image
    })
  }

  ngOnInit(): void {

  }
  closeCard(){
    this.imagesService.selectImage({id: 0})
  }

}
