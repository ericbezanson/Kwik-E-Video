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

  /*
  videos: Video[] = [
    {
      title: "Title 1",
      imageUrl: "http://via.placeholder.com/350x500",
      description: "Sample desc 1",
      genre: "Horror"    
    },
    {
      title: "Title 2",
      imageUrl: "http://via.placeholder.com/350x500",
      description: "Sample desc 2",
      genre: "Action"    
    },
  ]
  */

  videos: Video[] = videos;

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
      name: "Action"
    },
    {
      name: "Children"  
    },
  ]

  constructor(route: ActivatedRoute) { 
    // Have to retrieve list of videos here
    // Discuss with Evan    
    this.genre = "All";

    // Retrieve genre filter
    route.queryParamMap.subscribe(params => {
      this.genre = params.get('genre');
  
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
