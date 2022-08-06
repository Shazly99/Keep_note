import { NoteService } from './../../../shared/services/note.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
selector: 'app-notes-show',
templateUrl: './notes-show.component.html',
styleUrls: ['./notes-show.component.scss']

})
export class NotesShowComponent implements OnInit {
@Input() idShow: any;
@Output() items = new EventEmitter<any>();
itemDetalis: any = {}
formData: FormGroup = new FormGroup({
  title: new FormControl(null, [Validators.required]),
  description: new FormControl(null, [Validators.required])
})

constructor(private _NoteService: NoteService, private _ToastrService: ToastrService) { }

ngOnInit(): void {
  this.getALL()
}
getALL() {
  this._NoteService.getNodeById(this.idShow).subscribe(respond => {
    this.itemDetalis = respond
    this.formData.patchValue({
      title: respond.title,
      description: respond.description
    })
  })
}
onSubmit(id: any) {
  if (id === '') {
    this.add(this.formData.value)
  } else {
    this.update(id, this.formData.value)
  }
}
// Add new notes send [data] from API
add(data: any) {
  this._NoteService.addNote(data).subscribe(respond => {
    this._ToastrService.success("Item Add successfuly", "Success", { timeOut: 3000, closeButton: true, progressBar: true })
    this.getItems()
  }, err => {
    this._ToastrService.error(err, "Error!", { timeOut: 4000, closeButton: true, progressBar: true })
  })
  this.getALL()
}
// send id & data from Api How 
/**
 * 
 * @param id Get Id when user click Add 
 * @param data Get Model 
 */
update(id: any, data: any) {
  this._NoteService.update(id, data).subscribe(
    respond => {
      this.getItems()
      this._ToastrService.success("note Updated successfuly", "Update", { timeOut: 3000, closeButton: true, progressBar: true })
    }, err => {
      this._ToastrService.error(err.message, "Error!", { timeOut: 4000, closeButton: true, progressBar: true })
    })
}
getItems() {
  this._NoteService.getAll().subscribe(respond => {
    this.items.emit(respond)
  })
}

}
