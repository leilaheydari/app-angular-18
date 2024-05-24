import { ValidatorFn, Validators } from '@angular/forms';

export const emailPattern : string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
export const passwordPattern: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{8,16}$';

// Validators
export const emailValidator: ValidatorFn = Validators.pattern(emailPattern);
export const passwordValidator: ValidatorFn = Validators.pattern(passwordPattern);

// Validator for minimum length
export function minLengthValidator(minLength: number): ValidatorFn {
    return (control): { [key: string]: any } | null => {
        if (control.value && control.value.length < minLength) {
            return { 'minLength': { requiredLength: minLength, actualLength: control.value.length } };
        }
        return null;
    };
}

// Validator for maximum length
export function maxLengthValidator(maxLength: number): ValidatorFn {
    return (control): { [key: string]: any } | null => {
        if (control.value && control.value.length > maxLength) {
            return { 'maxLength': { requiredLength: maxLength, actualLength: control.value.length } };
        }
        return null;
    };
}
