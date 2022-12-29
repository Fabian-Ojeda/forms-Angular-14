import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form = new FormGroup({
    name : new FormControl('',[Validators.required, Validators.maxLength(8)]),
    email : new FormControl(''),
    tel : new FormControl(),
    dateControl : new FormControl(),
    numberControl : new FormControl(),
    category : new FormControl('', Validators.required),
    tag : new FormControl(),
    agree : new FormControl(false),
    gender : new FormControl()
  });

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
    this.form.get('name').valueChanges.subscribe(value => {
      this.alertConFormControl(value);
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

  alertConFormControl(value){
    alert(value);
  }

  get telFieldC(){
    return this.form.get('tel');
  }

  seNosFue(event){
    if (this.form.valid){
      console.log(this.form.value);
    }else{
      this.form.controls.name.markAsTouched();
    }
  }

}
