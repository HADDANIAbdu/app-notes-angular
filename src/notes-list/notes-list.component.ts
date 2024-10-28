import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NOTES, Note } from '../notes';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  imports: [NgFor, ReactiveFormsModule],
})
export class NotesListComponent {
  notes = NOTES;
  title = '';
  text = '';
  id = 0;
  isModaltrue = false;
  note : Note = {
    id:0,
    title:'',
    text:''
  }
  modifyNoteForm = new FormGroup({
    title : new FormControl('',Validators.required),
    text : new FormControl('',Validators.required),
  });
  delete_note(note : Note) {
    let index = this.notes.indexOf(note);
    this.notes.splice(index,1);
  }
  modify_note(note : Note){
    this.isModaltrue = true;
    this.id = note.id;
    this.title = note.title;
    this.text = note.text;
  }
  modifyIt(){
    this.isModaltrue = false;
    this.note = this.notes.find((note) => note.id === this.id)?? this.note;
    this.note.title = this.modifyNoteForm.value.title?? '';
    this.note.text = this.modifyNoteForm.value.text?? '';
  }
  Cancel(){
    this.isModaltrue = false;
  }
}
