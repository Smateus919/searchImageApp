import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http';

import { Hits, Image } from "../../models/hits.model";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  API = 'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25'

  idSelectedImage: Image
  private selectedImage = new BehaviorSubject<Image>({"id": 0})
  private wordToSearch = new BehaviorSubject<string>('')

  selectedImage$ = this.selectedImage.asObservable()
  wordToSearch$ = this.wordToSearch.asObservable()

  constructor(
    private http: HttpClient
  ) { }

  getImages(params: string){
    return this.http.get<Hits>(`${this.API}&q=${params}`)
  }

  selectImage(id: Image){
    this.idSelectedImage = id
    this.selectedImage.next(this.idSelectedImage)
  }

  searchWord(word: string){
    this.wordToSearch.next(word)
  }
}
