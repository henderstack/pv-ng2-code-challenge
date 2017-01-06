import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registerPipe'
})
export class RegisterPipe implements PipeTransform {

  transform(value: Array <String>, args?: any): Array <String> {
    let arrTransform = value;

    for (let x=1; x < arrTransform.length; x++){
      let xVal = +arrTransform[x];
      if ((xVal % 3 == 0) && (xVal % 5 == 0)) {
        arrTransform[x] = "Register Patient";
      } else {
        if (xVal % 3 == 0) {
          arrTransform[x] = "Register";
        }

        if (xVal % 5 == 0) {
          arrTransform[x] = "Patient";
        }
      }
    }

    return arrTransform;
  }
}
