import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class RangeValidators {

    static largerSecond(control: AbstractControl): ValidationErrors | null {
        return RangeValidators.compare('largerSecond')(control);
    }

    static largerFirst(control: AbstractControl): ValidationErrors | null {
        return RangeValidators.compare('largerFirst')(control);
    }

    static compare(type: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.value === null || control.value.selectFirst == null || control.value && control.value.selectSecond == null) {
                return null;
            }
            if (type === 'largerSecond') {
                if (control.value.selectFirst > control.value.selectSecond) {
                    return { largerSecond: true };
                }
            } else if (type === 'largerFirst') {
                if (control.value.selectSecond > control.value.selectFirst) {
                    return { largerFirst: true };
                }
            }
            return null;
        };
    }
}
