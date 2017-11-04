import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent{

  videos = [
    {
      title: "Title 1",
      imageUrl: "http://via.placeholder.com/350x500",
      description: "Sample desc 1"
    },
    {
      title: "Title 2",
      imageUrl: "http://via.placeholder.com/350x500",
      description: "Sample desc 2"
    },
  ]

  constructor() { 
    // Have to retrieve list of videos here
    // Discuss with Evan
  }

}
