import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments$: any;

  constructor(private commentsService:CommentsService) { }

  ngOnInit(): void {
    this.comments$ = this.commentsService.getComments();
  }

}
