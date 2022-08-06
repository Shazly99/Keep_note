import { PostsListComponent } from './posts-list/posts-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAddComponent } from './post-add/post-add.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostEditComponent } from './post-edit/post-edit.component';

const routes: Routes = [ 
  {path:'post',component:PostsListComponent},
  {path:'add',component:PostAddComponent},
  {path:'show/:id',component:PostViewComponent},
  {path:'edit/:id',component:PostEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
