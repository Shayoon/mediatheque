import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire-album',
  templateUrl: './formulaire-album.component.html',
  styleUrls: ['./formulaire-album.component.scss']
})
export class FormulaireAlbumComponent implements OnInit {
  @Output() finish = new EventEmitter

  form: FormGroup = new FormGroup({});
  constructor(private builder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      "nom": [''],
      "artiste": [''],
      "annee": [''],
      "details": [''],
      "img": [''],
    })
  }

  onSubmit() {
    this.finish.emit(this.form.value)
  }

}