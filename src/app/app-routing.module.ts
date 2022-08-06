import { HomeComponent } from './View/pages/home/home.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { UserLayoutComponent } from './shared/layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackLayoutComponent } from './shared/layouts/black-layout/black-layout.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('./View/pages/pages.module').then(m=>m.PagesModule)
      }
    ]
  },
  {
    path:'auth',
    component:AuthLayoutComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('./View/auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  },
  { 
    path: 'admin', 
    component: AdminLayoutComponent ,
    children:[
      {
        path:'',
        loadChildren:()=>import('./View/posts/posts.module').then(m=>m.PostsModule)
      }
    ]
  },
  {
    path:'user',
    component:UserLayoutComponent,
    children:[
      {
        path:'notes',
        loadChildren:()=>import('./View/notes/notes.module').then(m=>m.NotesModule)
      }
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
