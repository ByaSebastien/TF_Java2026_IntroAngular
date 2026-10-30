import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static afterOneWeek(control: AbstractControl) {
    if (control.value) {
      let controlDate = new Date(control.value);
      let limit = new Date().addDays(7);

      if (controlDate <= limit) {
        return { afterOneWeek: true };
      }
    }
    return null;
  }
}
