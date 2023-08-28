export class DynamicForm {
  title!: string;
  defaultValue!: any;
  buttonDesc!: string;
  readonly!: boolean;
  segments!: DynamicFormSegments[];
}

export class DynamicFormSegments {
  title!: string;
  actions!: Actions[];
  params!: DynamicFormParams[];
}

export class Actions {
  actionType!: string;
  label!: string;
}

export class DynamicFormParams {
  controlName!: string;
  labelDesc!: string;
  type!: number;
  placeholder!: string;
  value!: any;
  readonly!: boolean;
  color?: string;
  backgroundColor?: string;
  required!: boolean;
  selectData!: { description: any; value: any }[];
}
