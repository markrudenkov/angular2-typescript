import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DService} from './shared/data.srv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  itemList = ['default first Item'];
  data: any;

  constructor(private ds: DService) {
    console.log(this.ds.getDataFromLocalHost().subscribe(data => this.data = data));
  }

  onClickMe(input1: string): void {
    this.itemList.push(input1);
  }

}


