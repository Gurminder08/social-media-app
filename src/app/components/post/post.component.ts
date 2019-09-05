import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { CommentService } from '../../services/comment.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

    //Attributes of Post component needed to render
    @Input() post: Post = <Post>{}
    user: User = <User>{}
    numberOfComments: number = 0

  constructor(private userService: UserService, private commentService: CommentService) { }

  ngOnInit() {
    if( this.post ) {
      //Implement rxjs version of promise.all for both to work in parallel
      this.getComments();
      this.getUserDetails();
    }
  }

  getUserDetails() {
    return this.userService.getUser(this.post.userId).subscribe( ( response : User ) => {
      if( response ) {
        this.user = response;
      }  
    } );
  }

  getComments() {
    return this.commentService.getComments(this.post.id).subscribe( ( response: Comment[] ) => {
      if( response ) {
        this.numberOfComments = response.length;
      } 
    } );
  }

}
