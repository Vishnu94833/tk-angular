import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/service/global.service';

interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}

interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}

interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: JsonFormControlOptions;
  required: boolean;
  validators: JsonFormValidators;
}

export interface JsonFormData {
  controls: JsonFormControls[];
}

@Component({
  selector: 'app-dynamic-reactive-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dynamic-reactive-form.component.html',
  styleUrls: ['./dynamic-reactive-form.component.scss'],
})
export class DynamicReactiveFormComponent implements OnInit {
  // @ts-ignore
  public formData: JsonFormData;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.getDynamicFormData().subscribe((res) => {
      this.formData = res;
    });
  }
}
