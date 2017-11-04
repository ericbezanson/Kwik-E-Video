import { Video } from './models/video';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
const headers = new HttpHeaders()
  .set("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovLyouaW5nZXN0LmlvIiwiY2lkIjoiSW5nZXN0RGFzaGJvYXJkIiwiZXhwIjoxNTA5ODk1OTY1LCJqdGkiOiIzY2EwNDVmMS0yNWUyLTQ5ZWQtODc2ZC0yMjc5NmMzOTJhMWIiLCJpYXQiOjE1MDk4MDk1NjUsImlzcyI6Imh0dHBzOi8vbG9naW4uaW5nZXN0LmlvIiwibnR3IjoiZDdhYzRlODUtNGEyYy00MWU5LTljZWYtM2MxZDdjNDJlMjRlIiwic2NvcGUiOnsiYWN0aW9ucyI6WyJwZXJzb25hbCIsInJlYWRfYmlsbGluZyIsInJlYWRfY2xpZW50cyIsInJlYWRfZXZlbnRzIiwicmVhZF9ob29rcyIsInJlYWRfaW5wdXRzIiwicmVhZF9qb2JzIiwicmVhZF9saXZlIiwicmVhZF9uZXRLZXlzIiwicmVhZF9uZXR3b3JrcyIsInJlYWRfcHJvZmlsZXMiLCJyZWFkX3VzZXJzIiwicmVhZF92aWRlb3MiLCJ3cml0ZV9iaWxsaW5nIiwid3JpdGVfY2xpZW50cyIsIndyaXRlX2hvb2tzIiwid3JpdGVfaW5wdXRzIiwid3JpdGVfam9icyIsIndyaXRlX2xpdmUiLCJ3cml0ZV9sb2NrZWRfcHJvZmlsZXMiLCJ3cml0ZV9uZXRLZXlzIiwid3JpdGVfbmV0d29ya3MiLCJ3cml0ZV9wcm9maWxlcyIsIndyaXRlX3VzZXJzIiwid3JpdGVfdmlkZW9zIl19LCJzdWIiOiIxOTRmZWU4MS01MGNkLTRlNjMtOWVjYy04M2QwZTc2MTk0ZGIifQ.Tu1eZelwHYcmth2jN3JTbCQiKMcOa3Q5oTMty0U6SX8KcyCXSjTn1ttExoUds4q7-oVNO52O0wqnii-NDiAxzx2o6MP7_7FpJ2HJC_GZq9G37LAY0j_aZ5BO5BzLuypBhwxWVcceSmIX_jDFvalu6bGGwaswIPyL3I0fAKMhHXkjVpoLNLwev56m82BrThXVJwsr3CbUD7_DZc0D-I3waj9j34dUM34farO8T4EMQw6nvmx4DJdAea9rJIYoojnuqvqOY7HOKYDUjbrGe9dvu0yygJQXj_VkNE26P3Cr2t5EjWOGA_hQf17wvi-Sx6I2c7z0513Toib_mxJ8uOSNag")
  .set("Accept","application/vnd.ingest.v1+json");

export let videos: Video[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Videos;
  constructor(private userService: UserService, private auth: AuthService, router: Router, private http: HttpClient) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);

        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  this.http.get('https://api.ingest.io/videos',{headers})
    .subscribe(vid => {
      this.Videos = vid;
      console.log(this.Videos);
      
      for(var i = 0; i < this.Videos.length; i++){
        let video = {          
            title: this.Videos[i].title,
            imageUrl: this.Videos[i].poster.thumbnail_url,
            description: this.Videos[i].description,
            genre: this.Videos[i].genre,
            videoUrl: this.Videos[i].variant_urls.url,
        }
        videos.push(video);
      }

    });
  
  }
}