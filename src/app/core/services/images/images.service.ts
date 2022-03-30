import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http';

import { Hits, Image } from "../../models/hits.model";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private selectedImage = new BehaviorSubject<Image>({"id": 0})
  idSelectedImage: Image

  selectedImage$ = this.selectedImage.asObservable()

  constructor(
    private http: HttpClient
  ) { }

  getImages(){
    return this.http.get<Hits>('https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25')
  }

  selectImage(id: Image){
    this.idSelectedImage = id
    this.selectedImage.next(this.idSelectedImage)
  }
}
