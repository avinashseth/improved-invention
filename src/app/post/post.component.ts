import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: any;
  subscription: Subscription;
  likes: number;
  comments;

  constructor(private route: ActivatedRoute, private api: ApiService, private titleTag: Title) {
    this.likes = Math.floor(Math.random() * 10) + 1;
    this.comments = [
      {
        id: 1,
        user: "Avinash",
        comment: "Lorem ipsum dolor sit amet",
        likes: Math.floor(Math.random() * 10) + 1
      }
    ];
  }

  ngOnInit() {
    this.titleTag.setTitle("View Post");
    this.subscription = this.api.getPost(this.route.snapshot.params.id)
      .subscribe((response) => this.post = response);
  }
  likePost() { this.likes++; }
  likeComment(index) { this.comments[index].likes++; }
  ngOnDestroy() { this.subscription.unsubscribe(); }

  deletePost(id) {
    if (confirm("Are you sure you want to delete this post?")) {
      alert("Deleted");
      this.subscription = this.api.removePost(id)
        .subscribe((response) => console.log(response));
    }
  }


}
