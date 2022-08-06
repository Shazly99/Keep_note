 
import { PostService } from './../../shared/services/post.service';
 import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

 HttpClient
@NgModule({
  declarations: [
    PostsListComponent,
    PostAddComponent,
    PostViewComponent,
    PostEditComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 

   ],
  exports:[
    PostsListComponent,
    
  ],providers:[
    PostService, 
    HttpClientModule,
  ]
})
export class PostsModule { }
