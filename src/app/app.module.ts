import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import {DService} from './shared/data.srv';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    PostComponent,
    CommentComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [DService],
  bootstrap: [AppComponent]
})
export class AppModule { }
