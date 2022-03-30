import { Component, OnInit } from '@angular/core';

import { ImagesService } from "../../core/services/images/images.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  wordToSearch: string

  constructor(
    private imagesService: ImagesService
  ) { }

  ngOnInit(): void {
  }

  searchWord(){
    this.imagesService.searchWord(this.wordToSearch)
    console.log(this.wordToSearch);

  }
}
