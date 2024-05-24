import {  Component, inject, Input, output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GenericFormUiComponent } from '../generic-form-ui/generic-form-ui.component';
import { CommonModule } from '@angular/common';
import { FormDataSet } from './../../../types/form-class';

@Component({
  selector: 'app-generic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    GenericFormUiComponent,
    CommonModule
  ],

  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.scss',

})
export class GenericFormComponent {
  value = output<FormData | string>();
  form!: FormGroup;
  @Input() data!: FormDataSet;
  private fb = inject(FormBuilder);
  private formGroupConfig: { [key: string]: any } = {};


  ngOnInit() {
    this.createForm();
  }


  createForm() {
    if (!this.data) {
      console.error('No form data provided.');
      return;
    }

    for (const field of this.data.formData) {
      let validatorsArray = [];
      if (field.pattern) {
        validatorsArray.push(Validators.pattern(field.pattern));
      }
      if (field.required) {
        validatorsArray.push(Validators.required);
      }

      if (field.controlType === 'checkbox') {
        // Create a FormArray for checkboxes
        this.formGroupConfig[field.key] = this.fb.array(
          field.options?.map(() => new FormControl(false)) || []
        );
      } else {
        this.formGroupConfig[field.key] = new FormControl(
          field.value || '', validatorsArray
        );
      }
    }

    if (this.data.nestedData && this.data.nestedData.length > 0) {
      for (const nestedForm of this.data.nestedData) {
        const nestedFormGroup = this.fb.group({});
        for (const field of nestedForm.value) {
          nestedFormGroup.addControl(
            field.key,
            new FormControl(
              field.value || '',
              field.required ? Validators.required : null
            )
          );
        }
        this.formGroupConfig[nestedForm.name] = nestedFormGroup;
      }
    }

    this.form = this.fb.group(this.formGroupConfig);
  }



  addItem(arrayName: string) {
    if (!this.data || !this.data.arrayData) {
      console.error(`No array data provided for ${arrayName}.`);
      return;
    }
    const arrayExists = this.data.arrayData.some(item => item.name === arrayName);

    if (!arrayExists) {
      console.error(`No array found with name: ${arrayName}.`);
      return;
    }


    let arrayControl = this.form.get(arrayName) as FormArray;
    if (!arrayControl) {
      arrayControl = this.fb.array([]);
      this.form.addControl(arrayName, arrayControl);
    }
    this.data.arrayData.forEach(item => {
      if (item.name === arrayName) {
        const newFormGroup = this.fb.group({});
        for (const control of item.value) {
          newFormGroup.addControl(
            control.key,
            new FormControl(control.value || '', control.required ? Validators.required : null)
          );
        }
        arrayControl.push(newFormGroup);
      }
    });


  }






  removeItem(name: string, i: number) {
    const formArray = this.form.get(name) as FormArray;
    formArray.removeAt(i);
  }




  onSubmit(): void {
    const formValue = this.form.value;
    const processedFormValue = this.processFormValues(formValue);

    if (this.form.valid) {
     this.value.emit(processedFormValue)
    }
    else{
      this.value.emit('error')
    }
  }

  processFormValues(formValue: any): any {
    const processedValue = { ...formValue };

    for (const field of this.data.formData) {
      if (field.controlType === 'checkbox' && Array.isArray(field.options)) {
        processedValue[field.key] = field.options.reduce((acc: any, option, index) => {
          acc[option.key] = formValue[field.key][index] || false; // Ensure all keys have boolean values
          return acc;
        }, {});
      }
    }

    return processedValue;
  }



  Array(name: string): FormArray {
    return this.form.get(name) as FormArray;
  }

  isFormArray(name: string): boolean {
    const control = this.form.get(name);
    return control instanceof FormArray;
  }

  nestedForm(name: string): FormGroup {
    return this.form.get(name) as FormGroup;
  }

  arrayForm(name: string, i: number): FormGroup {
    const arrayControl = this.form.get(name) as FormArray;
    const itemControl = arrayControl.at(i) as FormGroup;
    return itemControl;
  }
}
