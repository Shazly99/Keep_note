import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NoteService } from './../../../shared/services/note.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
selector: 'app-notes-list',
templateUrl: './notes-list.component.html',
styleUrls: ['./notes-list.component.scss'],
providers: [NgModule, NgbModalConfig]
})
export class NotesListComponent implements OnInit {
NotesDB: any;
idItem: any;
searchText: any;
// Form lest 
form: FormGroup = new FormGroup({
  title: new FormControl(null, [Validators.required]),
  description: new FormControl(null, [Validators.required])
})
constructor(private _NoteService: NoteService, private modalService: NgbModal, private _ToastrService: ToastrService) { }
ngOnInit(): void {
  this.get()
}
// Get All data and save in probelty=>(NotesDB)
get() {
  this._NoteService.getAll().subscribe(respond => {
    this.NotesDB = respond
  })
}
// Get item by id 
getItem(id: any) {
  this._NoteService.getNodeById(id).subscribe(respond => {
    this.idItem = id
  })
}
// function delete by id 
deleteItem(id: any) {
  this._NoteService.deleteItem(id).subscribe(res => {
    this._ToastrService.success("Item deleted successfuly", "Success", { timeOut: 3000, closeButton: true, progressBar: true })
    this.get()
  },
    err => {
      this._ToastrService.error(err, "Error!", { timeOut: 4000, closeButton: true, progressBar: true })
    })
}

edit(model: any, id: any) {
  this.modalService.open(model).result.then((result) => {
  }, (reason) => {
  });
  this.idItem = id
}

getUpdateItems(updatedItem: any) {
  this.NotesDB = updatedItem;
  this.modalService.dismissAll()
}
}
