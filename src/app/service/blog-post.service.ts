import {Injectable} from '@angular/core';
import {AbstractService} from "../common/abstract-service";
import {BlogPost} from "../model/blog-post";
import {HttpClient} from "@angular/common/http";
import {Search} from "../common/search";
import {BLOGPOSTS_PATH} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class BlogPostService extends AbstractService<BlogPost> {

  constructor(http: HttpClient) {
    super(BLOGPOSTS_PATH, http)
  }

  getId(element: BlogPost) {
    return element.uuid
  }

  buildSearch() {
    this.search = new Search<BlogPost>(BlogPost)
  }
}
