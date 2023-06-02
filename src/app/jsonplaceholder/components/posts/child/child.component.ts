import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChildComponent implements OnInit {
  @Input()
  childTemplate!: TemplateRef<any>;

  dataValue = [
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""},
    {label:"label1",vishnu:"VISHNU",test:""}
  ]

  constructor() {}

  ngOnInit(): void {}
}
