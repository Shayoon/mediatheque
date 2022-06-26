import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  @Output() finish = new EventEmitter

  form: FormGroup = new FormGroup({});
  constructor(private builder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      "nom": [''],
      "synopsis": [''],
      "real": [''],
      "annee": [''],
      "details": [''],
      "img": [''],
    })
  }

  onSubmit() {
    this.finish.emit(this.form.value)
  }

}
