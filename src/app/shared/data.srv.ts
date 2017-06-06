import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'


@Injectable()
export class DService {

  constructor(private http: Http) {

  }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map((res: Response) => res.json());
  }

  getComments(postID) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' +
      postID + '/comments').map((res: Response) => res.json());
  }
}
