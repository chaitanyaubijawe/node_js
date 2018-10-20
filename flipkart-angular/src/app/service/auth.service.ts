import {Injectable} from '@angular/core';

@Injectable()
export class AuthService{


  isUserSignIn:boolean=false;


  signIn(userName:String, password:String){


    // call http post to get auth token.....

    this.isUserSignIn = true;

    console.log("user signed in successfully :: ", this.isUserSignIn);

  }

  signOut(){
    this.isUserSignIn = false;
  }

  isUSerSignedIn(){
    return this.isUserSignIn;
  }

}
