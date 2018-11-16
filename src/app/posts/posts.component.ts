import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  subscription: Subscription;
  constructor(private api: ApiService, private http: HttpClient) { }
  ngOnInit() {
    this.subscription = this.api.getAllPosts()
      .subscribe((response) => this.posts = response);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
