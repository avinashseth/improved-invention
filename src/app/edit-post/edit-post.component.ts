import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post: any;
  subscription: Subscription;
  router: Router;


  constructor(private route: ActivatedRoute, private api: ApiService,
    private titleTag: Title) { }

  ngOnInit() {
    this.titleTag.setTitle("Edit Post");
    this.subscription = this.api.getPost(this.route.snapshot.params.id)
      .subscribe((response) => this.post = response);
  }
  savePost(id) {
    alert("Post Details saved");
    window.location.href = "/posts";
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
