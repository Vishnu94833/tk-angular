import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonPlaceholderService } from 'src/app/core/services/json-placeholder.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<any> | undefined;
  valueFromButton : string = "";

  constructor(private jsonPlaceHolderService: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.posts$ = this.jsonPlaceHolderService.getPosts();
  }

  onButtonClick(req:string) {
    this.valueFromButton = req;
    console.log("Value from button",this.valueFromButton);
    
  }
}
