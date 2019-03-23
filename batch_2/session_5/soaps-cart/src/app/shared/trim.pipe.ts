import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    console.log("hey there:::  value coming down is :: " + value + " --- " + args);
    if (value.length > args){
      return value.substring(0,args) + "......";
    }

    return value;

  }

}
