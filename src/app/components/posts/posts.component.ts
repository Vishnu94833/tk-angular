import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/model/post.model';
import { JsonPlaceholderService } from 'src/app/core/services/json-placeholder.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> | undefined;
  valueFromButton: string = "" ;

  constructor(private jsonPlaceHolderService: JsonPlaceholderService, private router: Router) {}

  ngOnInit(): void {
    this.posts$ = this.jsonPlaceHolderService.getPosts(this.constructor.name);
  }

  onButtonClick(req: string) {
    this.valueFromButton = "Test";
    console.log(this.valueFromButton);
    
    // this.router.navigate(['/todos'])
  }
}
