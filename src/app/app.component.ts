import { Component } from '@angular/core';
import { Convert, Reddit } from './Reddit';
import { RedditApiService } from './reddit-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RedditApiService]
})
export class AppComponent {
  title = 'RedditApp';
  reddit?: Reddit = null as any;
  constructor(private redditAPI: RedditApiService){}

  getPosts(){
    let subreddit:string = (<HTMLInputElement>document.getElementById("Subreddit")).value;
    this.redditAPI.getRedditPosts(subreddit).subscribe(
      (result:any) => {
        console.log(result);
        let JSON:string = Convert.redditToJson(result);
        let reddit: Reddit = Convert.toReddit(JSON);
        console.log(reddit);
        this.reddit = reddit;
      }
    );
  }
}
