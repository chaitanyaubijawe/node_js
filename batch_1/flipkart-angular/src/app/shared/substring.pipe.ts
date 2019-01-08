import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:"slice"
})
export class SubstringPipe implements PipeTransform{




  transform(value: any, ...args: any[]): any {


    console.log("These are arguments...", args);
    //if(args[0] == "PARAM"){
    // return ::
    // }

    if(value.length > 10){

      return value.substring(0,10) + "....";
    }else{
      return value
    }



  }

}
