import { Component, OnInit, VERSION, ViewChild, ViewEncapsulation } from '@angular/core';
import {Subject} from "rxjs";
import {MatStepper} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DemoComponent implements OnInit {

  editable: boolean = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  subject = new Subject(); 

  
  
  move(index: number) {
    this.stepper.selectedIndex = index;
  }

}