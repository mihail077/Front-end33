import { Component } from '@angular/core';
import { IComment } from '../../../model';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  comments!: IComment[]
  styleData = 'padding: 10px; border: 2px solid aqua'

  constructor(private commentService: CommentService) {
    this.commentService.getComments().subscribe(comments => this.comments = comments) 
  }
  handleHideComment(comment: IComment): any {
    console.log(`data transfered to parent component: ${comment.email}`);
  }
} 
