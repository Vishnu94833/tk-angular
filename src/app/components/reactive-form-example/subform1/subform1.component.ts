import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-subform1',
  templateUrl: './subform1.component.html',
  styleUrls: ['./subform1.component.scss']
})
export class Subform1Component implements OnInit {

  @Input() form!: UntypedFormGroup;
  @Input() car: any;
  @Input() carIndex!: number;


  constructor() { }

  ngOnInit(): void {
  }

}
