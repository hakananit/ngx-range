import { FormGroup, ValidatorFn } from '@angular/forms';

export class RangeValidators {

    static largerSecond(control: FormGroup): any | null {
        return RangeValidators.compare('largerSecond')(control);
    }
    
    static compare(type: string): ValidatorFn {
        return (control: FormGroup): { [key: string]: boolean } | null => {
            const keys = Object.keys(control.controls);

            if (type === 'largerSecond') {
                if (control.controls[keys[0]].value > control.controls[keys[1]].value) {
                    return { range: true };
                }
            }
            return null;
        }
    }
}
