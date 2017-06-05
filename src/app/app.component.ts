import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemList = ['default first Item'];

 onClickMe(input1 : string) : void {
  this.itemList.push(input1);
}  
}


