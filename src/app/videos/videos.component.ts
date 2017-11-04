import { videos } from "../app.component"
import { Video } from './../models/video';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent{

  videos: Video[];

  filteredVideos: Video[];

  genre: string;

  genres = [
    {
      name: "All"
    },
    {
      name: "Comedy"
    },
    {
      name: "Horror"
    },
    {
      name: "Drama"
    },
    {
      name: "Family"  
    },
  ]

  constructor(route: ActivatedRoute) { 
    // Have to retrieve list of videos here
    // Discuss with Evan 
    this.videos = videos;   
    this.genre = "All";

    // Retrieve genre filter
    route.queryParamMap.subscribe(params => {
      this.genre = params.get('genre');

      if(this.genre === null) {
        this.genre = "All";
      }
  
      console.log("Genre:");
      console.log(this.genre);

      if(this.genre == "All"){
        this.filteredVideos = this.videos;
      } else {
        this.filteredVideos = this.videos.filter(v => (v.genre === this.genre));
      };
    });         
  }
}
