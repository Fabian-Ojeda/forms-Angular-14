import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form = new FormGroup({

  })

  nameField = new FormControl('',[Validators.required, Validators.maxLength(8)]);
  emailField = new FormControl('');
  telField = new FormControl();
  dateControl = new FormControl();
  numberControl = new FormControl();
  categoryField = new FormControl('', Validators.required);
  optionsSelect: string[] = ['opcion 1', 'opcion 2', 'opcion 3', 'opcion 4'];
  tagField = new FormControl();
  agreeField = new FormControl(false);
  genderField = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(value => {this.getNameValue(value); });
    this.categoryField.valueChanges.subscribe(value => {
      alert(value);
    });
  }

  getNameValue(value){
    console.log(this.nameField.value);
  }

  changeDefaultValue(){
    this.optionsSelect = ['nueva opcion', 'nueva opcion 2'];
    this.categoryField.setValue(this.optionsSelect[1]);
  }

  quitarObligatoriedadDeBoton(){
    const value = this.nameField.value;
    this.nameField.setValidators(Validators.maxLength(4));
    this.nameField.setValue(value);
  }

}
