import { PostService } from './../../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  ids:any;
  getDataById:any;
  title:any
  description:any
  formData = this._FormBuilder.group({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])
  })


  constructor(private _Router: Router,private toastr: ToastrService, private _ActivatedRoute: ActivatedRoute, private _PostService: PostService, private _FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ids=this._ActivatedRoute.snapshot.paramMap.get('id')
    console.log(this.ids)
    this._PostService.get(this.ids).subscribe(res=>{
      this.getDataById=res
       this.title= this.getDataById.title
       this.description= this.getDataById.description 
    })
  }
  
  onSubmit() {
    if (this.formData.invalid) {
      this.toastr.error('opps Form is not valid ', 'Error!',{timeOut:3000,closeButton:true,progressBar:true});
      return
    }
    this._PostService.update(this.ids,this.formData.value).subscribe(respond=>{
      this.toastr.success('It has been added successfully', 'Success!',{timeOut:3000,closeButton:true,progressBar:true});
      this._Router.navigate(['../admin/post'])
      console.log(respond)
 
    } )
  }

}
