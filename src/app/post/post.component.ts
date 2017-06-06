import {Component, Input, OnInit} from '@angular/core';
import {DService} from '../shared/data.srv';
import {isUndefined} from "util";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  comments: any;

  @Input() post: any;

  constructor(private _ds: DService) {
  }

  get_ds(): DService {
    return this._ds;
  }

  ngOnInit() {
  }

  getComments(commentId) {
    this._ds.getComments(commentId).subscribe(data => {
      this.comments = data
    });
  }
}
