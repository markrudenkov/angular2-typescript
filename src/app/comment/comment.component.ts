import {Component, Input, OnInit} from '@angular/core';
import {DService} from '../shared/data.srv';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: any;

  constructor() {
  }

  ngOnInit() {
  }

}