import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { IPost } from '../post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postBody: string; postTitle: string; subscription: Subscription;
  constructor(private api: ApiService) { }
  ngOnInit() { }

  addPost() {
    let post: IPost = {
      "id": Math.random(),
      "userId": Math.random(),
      "title": this.postTitle,
      "body": this.postBody
    };
    this.subscription = this.api.createNewPost(post)
      .subscribe((response) => console.log(response));
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
