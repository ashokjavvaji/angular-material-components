import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-buttons-indicators',
  templateUrl: './buttons-indicators.component.html',
  styleUrls: ['./buttons-indicators.component.css']
})
export class ButtonsIndicatorsComponent implements OnInit {

  fruits:string[] = ['Apple','Banana'];
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  separatorKeysCodes = [ENTER, COMMA];
  
  constructor() { }

  ngOnInit() {
  }
  removeFruit(fruit:string) {
    let index = this.fruits.indexOf(fruit);
    if(index>-1) {
      this.fruits.splice(index,1);
    }
  }
  addFruit (event:MatChipInputEvent) {
    let input = event.input;
    let value=event.value;
    if((value || '').trim()) {
      this.fruits.push(value.trim());
    }
    if(input) {
      input.value='';
    }
  }

}
