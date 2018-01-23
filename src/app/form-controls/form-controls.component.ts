import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.css']
})
export class FormControlsComponent implements OnInit {

  oneChecked = true;
  twoChecked = false;
  threeChecked:boolean = false;
  selectValues = ['One','Two','Three'];
  email = new FormControl('', [Validators.required, Validators.email]);
  autoCompleteControl: FormControl = new FormControl();
  animalControl = new FormControl('',[Validators.required]);
  seasons = ['Summer','Winter',"Fall","Rainy"];
  enteredAutoComplete: string;
  foods = [
    {value: 'chicken-0', viewValue: 'Chicken'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  favoriteSeason: string;
  selectedValue: string;
  sliderValue = 0;

  constructor() { }

  ngOnInit() {
  }

  checkboxChangeEvent() {
    if(this.threeChecked) {
      alert("Checked!!!");
    }
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
