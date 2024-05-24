import { ValidatorFn } from '@angular/forms';

export interface FormDataSet {
  formData: FormField<any>[];
  nestedData?: NestedField<any>[];
  arrayData?: ArrayField<any>[];
}


export class FormField<T> {
  value: T | undefined;
  key: string;
  order: number;
  label: string;
  icon? : string;
  required: boolean;
  errorMessage?: string;
  errorMessagePattern?: string;
  pattern?:string;
  description?:string;
  placeholder?:string;
  mask: MaskType;
  controlType: ControlType;
  type: Type;
  validators: ValidatorFn[];
  options?: OptionInterface[];
  nestedOption?: NestedOptionInterface[];
  selectType? : selectType;
  language?: Language;
  dateFormat?: DateFormat;
  timeFormat?: TimeFormat;

  constructor(fields: {
    value?: T;
    key?: string;
    order?: number;
    label?: string;
    icon? : string;
    required?: boolean;
    errorMessage?: string;
    errorMessagePattern?: string;
    pattern?:string;
    description?:string;
    placeholder?:string;
    mask?: MaskType;
    controlType?: ControlType;
    type?: Type;
    validators?: ValidatorFn[];
    options?: OptionInterface[];
    nestedOption?: NestedOptionInterface[];
    selectType? : selectType;
    language?: Language;
    dateFormat?: DateFormat;
    timeFormat?: TimeFormat;
  } = {}) {
    this.value = fields.value;
    this.key = fields.key || '';
    this.order = fields.order || 0;
    this.label = fields.label || '';
    this.icon = fields.icon || '';
    this.required = !!fields.required;
    this.errorMessage = fields.errorMessage || '';
    this.errorMessagePattern = fields.errorMessagePattern || '';
    this.pattern = fields.pattern || '';
    this.description = fields.description || '';
    this.placeholder = fields.placeholder || '';
    this.mask = fields.mask || MaskType.NONE
    this.controlType = fields.controlType || 'textbox';
    this.type = fields.type || 'text';
    this.validators = fields.validators || [];
    this.options = fields.options || [];
    this.nestedOption = fields.nestedOption || [];
    this.selectType = fields.selectType || 'basicSelection';
    this.language = fields.language || 'en';
    this.dateFormat = fields.dateFormat || 'date';
    this.timeFormat = fields.timeFormat || 'hh:mm';
  }
}

export type ControlType = 'textbox' | 'dropdown' | 'radio' | 'checkbox' | 'datepicker';
export type Type = 'text' | 'number' | 'file' | 'email' | 'password' | 'date';
export type selectType = 'basicSelection' | 'nestedSelection' | 'multipleSelection';
export type Language = 'fa' | 'en';
export type DateFormat = 'day' | 'month' | 'year' | 'yearMonth' | 'monthDay' | 'date' ;
export type TimeFormat = 'hh:mm:ss' | 'hh:mm' | 'hh' | 'mm'


export interface OptionInterface {
  key: string,
  value: string
}

export interface NestedOptionInterface {
  name : string;
  nested : OptionInterface[]
}



export enum MaskType {
  DATE = 'yyyy:dd:mm',
  TIME = 'hh:mm:ss',
  NONE = 'none',
  DATE_WITH_YEAR_FIRST = 'yyyy:mm:dd',
  TIME_WITH_AM_PM = 'hh:mm A',
  DATE_AND_TIME = 'yyyy:mm:dd hh:mm:ss',
  CUSTOM = 'custom', // مسک سفارشی
}


export class NestedField<T> {
  name: string;
  order?: number;
  value: FormField<T>[];

  constructor(name: string, value: FormField<T>[], order: number = 0) {
    this.name = name;
    this.order = order;
    this.value = value;
  }
}


export class ArrayField<T> {
  name: string;
  value: Array<FormField<T>>;
  addButtonText: string;
  removeButtonText: string;

  constructor(fields: {
    name: string;
    value: Array<FormField<T>>;
    addButtonText?: string;
    removeButtonText?: string;
  }) {
    this.name = fields.name;
    this.value = fields.value;
    this.addButtonText = fields.addButtonText || 'Add';
    this.removeButtonText = fields.removeButtonText || 'Remove';
  }

}

