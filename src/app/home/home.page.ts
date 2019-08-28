import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ControllerService } from '../services/controller.service';
import { Post } from '../models/post';
import { User } from '../models/user';
import { Comment } from '../models/comment'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numComments: number = 0;
  posts: Post[] = [];
  users: User[] = [];
  comments: Comment[] = [];
  len: number = 10;
  displayPosts: Post[] = [];

  // injecting modules to the constructor
  constructor(public api: ControllerService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute) {

  }

  // making api calls to fetch posts, users and comments
  ngOnInit() {
    this.getPosts();
    this.getUsers();
    this.getComments();
  }

  async getPosts() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.getPosts()
      .subscribe(res => {
        this.posts = res;
        this.addMorePosts(this.len);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async getUsers() {

    await this.api.getUsers()
      .subscribe(res => {
        this.users = res;
      }, err => {
        console.log(err);
      });
  }

  async getComments() {

    await this.api.getComments()
      .subscribe(res => {
        this.comments = res;
      }, err => {
        console.log(err);
      });
  }

  // trigger on scroll event when threshold reaches (100px)
  loadData(event) {
    setTimeout(() => {
      //App logic to determine if all data is loaded and disable the infinite scroll
      this.addMorePosts(this.len);
      event.target.complete();
      if (this.displayPosts.length == 100) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  // adding 10 posts each time scroll event accours
  addMorePosts(len: number) {
    this.displayPosts = this.posts.slice(0, len);
    console.log(this.displayPosts);
    this.len = this.len + 10;
  }

  // counting number of comments for each post
  countComment() {
    this.numComments++;
  }

  // method to display the count
  displayCount() {
    let currentCount = this.numComments;
    this.numComments = 0;
    return currentCount;
  }

}
