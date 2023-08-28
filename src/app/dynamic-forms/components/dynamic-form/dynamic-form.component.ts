import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DynamicForm } from '../../model/dynamic-form';
import { MockDynamicForm } from '../../model/mock-data';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  form!: FormGroup;
  segment!: string;
  dynamicForm: DynamicForm = MockDynamicForm.DATA;

  constructor(private fb: FormBuilder) {
    // this.segment = this.dynamicForm.segments[0].title;
    // this.form = this.createForm();
  }

  createForm(): FormGroup {
    let segmentsGroup: { [key: string]: FormArray } = {};
    this.dynamicForm.segments.forEach((segment) => {
      segmentsGroup[segment.title] = this.fb.array(
        segment.params.map((param) =>
          // this.fb.group(param)
          this.fb.group({
            [param.labelDesc]: new FormControl(param.value),
          })
        )
      );
      segmentsGroup[segment.title];
    });
    return this.fb.group(segmentsGroup);
  }

  formSubmitted(type: string, form: any) {
    if (type === 'submit') {
      console.log(form.value);
    } else if (type === 'reset') {
      form.reset()
    }
  }
}
