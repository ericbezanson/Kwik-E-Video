import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var Clappr: any;
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  url: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {    
    this.sub = this.route.params.subscribe(params => {
      this.url = params['url'];
      let player = new Clappr.Player({source: this.url, parentId: "#player" , height: 600, width: 800});
  })
  }
}
