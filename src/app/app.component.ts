import { Video } from './models/video';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';


export let videos: Video[] = [
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: AuthService, router: Router) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);

        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
