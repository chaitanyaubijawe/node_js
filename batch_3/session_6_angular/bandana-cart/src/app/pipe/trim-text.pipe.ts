import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'
})
export class TrimTextPipe implements PipeTransform {

  transform(value: any, size: Number): any {
    //alert("inside pipe..." + size);



    return value.substring(0,size) + "...";
  }

}
