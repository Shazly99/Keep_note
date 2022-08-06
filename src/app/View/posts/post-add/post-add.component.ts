import { PostService } from './../../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']

})
export class PostAddComponent implements OnInit {


  formData = this._FormBuilder.group({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])
  })


  constructor(private toastr: ToastrService, private _Router: Router, private _PostService: PostService, private _FormBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formData.invalid) {
      this.toastr.error('opps Form is not valid ', 'Error!',{timeOut:3000,closeButton:true,progressBar:true});
      return;
    }
    this._PostService.addItem(this.formData.value).subscribe(
      respond => {
        this.toastr.success('It has been added successfully', 'Success!',{timeOut:3000,closeButton:true,progressBar:true});
        this._Router.navigate(['../admin/post'])
      },
      err=>{
        this.toastr.error(err,"Error!",{timeOut:4000,closeButton:true,progressBar:true})
        console.log(err)
      }
      )

  }
}

