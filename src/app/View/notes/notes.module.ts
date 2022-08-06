import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesShowComponent } from './notes-show/notes-show.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// after download a packege search import 
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    NotesListComponent,
    NotesShowComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule,
    NgbModule,
     FormsModule,
     Ng2SearchPipeModule
  ]
})
export class NotesModule { }
