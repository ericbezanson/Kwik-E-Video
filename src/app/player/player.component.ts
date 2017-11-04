import { Component, OnInit } from '@angular/core';
declare var Clappr: any;
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let player = new Clappr.Player({source: 'http://www.html5videoplayer.net/videos/toystory.mp4', parentId: "#player" , height: 600, width: 800});

  }

}
