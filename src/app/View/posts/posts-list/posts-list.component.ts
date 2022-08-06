import { PostService } from './../../../shared/services/post.service';
 import { Component, OnInit } from '@angular/core';
 import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  providers: [NgbModalConfig,ToastrService]
})
export class PostsListComponent implements OnInit {
  postDB:any;
  constructor( private _PostService:PostService , private modalService:NgbModal  ,private _ToastrService:ToastrService ) {}

  ngOnInit(): void {  
    this.get()
  }
  // function get
  get(){
    this._PostService.getAll().subscribe(respond=>{
      this.postDB=respond 
    })
  } 
  // function delete
  deleteItem(modal:any,id:any){
    this.modalService.open(modal).result.then(result=>{
      this._PostService.deleteItem(id).subscribe(res=>{
       this._ToastrService.success("Item deleted successfuly","Success",{timeOut:3000,closeButton:true,progressBar:true})
        this.get()
      },err=>{
      this._ToastrService.error(err,"Error!",{timeOut:4000,closeButton:true,progressBar:true})
       })
      
    }
    )
  }

}
