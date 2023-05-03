import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subform1',
  templateUrl: './subform1.component.html',
  styleUrls: ['./subform1.component.scss']
})
export class Subform1Component implements OnInit {

  @Input() form!: FormGroup;
  @Input() car: any;
  @Input() carIndex!: number;


  constructor() { }

  ngOnInit(): void {
  }

}
