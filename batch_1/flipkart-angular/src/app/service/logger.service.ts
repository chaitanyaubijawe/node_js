import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {


  logMsg(msg: string) {
    console.log('Someone has asked for logging a message :: ', msg);
  }

  subsstring(value:any){

    return value.substring(0,10);

  }
}
