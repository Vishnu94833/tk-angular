import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MockDynamicForm } from 'src/app/dynamic-forms/model/mock-data';
import { MaterialModule } from 'src/app/material.module';
import { DynamicForm } from '../../model/dynamic-form';

@Component({
  selector: 'dynamic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  providers: [],
})
export class FormComponent implements OnInit{
  form!: FormGroup;
  @Input() segment!: string;
  @Input() formData: DynamicForm = new DynamicForm();

  constructor(private fb: FormBuilder) {
  
  }
  ngOnInit(): void {
    this.form = this.createForm();
  }
  createForm(): FormGroup {
    let segmentsGroup: { [key: string]: FormArray } = {};
    this.formData.segments.forEach((segment) => {
      segmentsGroup[segment.title] = this.fb.array(
        segment.params.map((param) =>
          this.fb.group({
            [param.labelDesc]: new FormControl(param.value),
          })
        )
      );
    });
    return this.fb.group(segmentsGroup);
  }

  formSubmitted(type: string, form: any) {
    if (type === 'submit') {
      console.log(form.value);
    } else if (type === 'reset') {
      form.reset();
    }
  }
}
