import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Image } from 'src/app/core/models/hits.model';

import { ImagesService } from "../../core/services/images/images.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedImage: Image = {id: 0}

  @ViewChild('cardImage') cardImage:ElementRef

  constructor(
    private imagesService: ImagesService,
    private renderer2: Renderer2,
  ){
    this.imagesService.selectedImage$.subscribe(image => {
      this.selectedImage = image
    })
   }


  ngOnInit(): void {
  }
}
