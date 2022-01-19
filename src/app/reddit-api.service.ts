import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {
  baseURL:string = "https://www.reddit.com/r/";
  constructor(private http:HttpClient){}

  getRedditPosts(subreddit:string):Observable<any>{
    let fullURL:string = `${this.baseURL}${subreddit}/.json`
    let result:Observable<any> = this.http.get(fullURL);
    return result;
  }
}
