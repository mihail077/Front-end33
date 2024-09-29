import { Component } from '@angular/core';
import { IPost } from '../../../model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  posts!: IPost[]
  styleData = 'padding: 10px; border: 2px solid yellow'

  constructor(private postService: PostService) {
  this.postService.getPosts().subscribe(posts => this.posts = posts) 
}

handleHidePost(post: IPost): any {
  console.log(`data transfered to parent component: ${post.id}`);
}
}
