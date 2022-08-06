import { PostService } from './../../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
ActivatedRoute
@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  getId:any;
  title:any;
  description:any
  constructor( private _ActivatedRoute:ActivatedRoute, private _Router: Router, private _PostService: PostService, private _FormBuilder: FormBuilder) { }

  ngOnInit(): void {
   this.getId=  this._ActivatedRoute.snapshot.paramMap.get('id')
   this._PostService.get(this.getId).subscribe(respond=>{
    this.title=respond.title
    this.description=respond.description
   })
  }

}
