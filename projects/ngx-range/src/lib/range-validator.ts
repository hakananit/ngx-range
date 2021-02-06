import { AbstractControl, ValidatorFn } from '@angular/forms';

export class RangeValidators {

    static largerSecond(control: AbstractControl): any | null {
        return RangeValidators.compare('largerSecond')(control);
    }

    static largerFirst(control: AbstractControl): any | null {
        return RangeValidators.compare('largerFirst')(control);
    }

    static compare(type: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {

            if (type === 'largerSecond') {
                if (control.value.firstValue > control.value.secondValue) {
                    return { largerSecond: true };
                }
            } else if (type === 'largerFirst') {
                if (control.value.secondValue > control.value.firstValue) {
                    return { largerFirst: true };
                }
            }
            return null;
        };
    }
}
