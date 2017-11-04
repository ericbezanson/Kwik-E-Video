import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  filteredVideos;

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
  ]

  constructor(route: ActivatedRoute) { 
    // Have to retrieve list of videos here
    // Discuss with Evan
    this.filteredVideos = this.videos;
    
    // Retireve genre filter
    /*
    route.queryParamMap.subscribe(params => {
      this.genre = params.get('genre');
      
      /*
      this.filteredVideos = (this.genre) ?
        this.videos.filter(v => v.genre === this.genre) :
        this.videos
        
    }); 
    */   
  }

}
