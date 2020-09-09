import {Component} from '@angular/core';
import {BlogPost} from "../../model/blog-post";
import {ActivatedRoute, Router} from "@angular/router";
import {BlogPostService} from "../../service/blog-post.service";
import {AbstractViewComponent} from "../../common/abstract-view-component";

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html'
})
export class BlogPostViewComponent extends AbstractViewComponent<BlogPost> {

  constructor(
      router: Router,
      private blogPostService: BlogPostService,
      protected route: ActivatedRoute
  ) {
    super(router, route, blogPostService, 'blogposts')
  }

  getId() {
    return this.element.uuid
  }
}
