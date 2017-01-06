import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diagnosePipe'
})
export class DiagnosePipe implements PipeTransform {

  transform(value: Array <String>, args?: any): Array <String> {
    let arrTransform = value;

    for (let x=1; x < arrTransform.length; x++){
      let xVal = +arrTransform[x];
      if ((xVal % 2 == 0) && (xVal % 7 == 0)) {
        arrTransform[x] = "Diagnose Patient";
      } else {
        if (xVal % 2 == 0) {
          arrTransform[x] = "Diagnose";
        }

        if (xVal % 7 == 0) {
          arrTransform[x] = "Patient";
        }
      }
    }

    return arrTransform;
  }
}