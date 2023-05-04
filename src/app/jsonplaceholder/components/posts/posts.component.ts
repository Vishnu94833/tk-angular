import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Observable } from 'rxjs';
import { Post } from '../../common/model/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$!:Observable<Post[]>
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts()
  }
}
