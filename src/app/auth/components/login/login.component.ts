import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { FormDataSet, FormField } from '../../../core/types/form-class';
import { emailPattern, emailValidator, passwordPattern, passwordValidator } from '../../../core/types/regex-validation';
import { GenericFormComponent } from '../../../core/generics/components/generic-form/generic-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    GenericFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  data: FormDataSet = { formData: [] };
  ngOnInit() {
    const formData: FormField<any>[] = [
      new FormField<string>({
        key: 'password',
        label: 'Password',
        required: true,
        controlType: 'textbox',
        errorMessage: 'Password is required',
        errorMessagePattern: 'Invalid password format.',
        type: 'password',
        pattern: passwordPattern,
        validators: [Validators.required , passwordValidator]
      }),

      new FormField<string>({
        key: 'email',
        label: 'Email',
        required: true,
        controlType: 'textbox',
        type: 'email',
        errorMessage: 'Email is required',
        errorMessagePattern: 'Invalid email format.',
        pattern: emailPattern,
        validators: [Validators.required, emailValidator]
      }),
    ]

    this.data = {
      formData: formData,
    }

  }

  submit(value: FormData | string){
    console.log(value);

  }




}
