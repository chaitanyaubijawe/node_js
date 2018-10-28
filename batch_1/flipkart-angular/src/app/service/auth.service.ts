import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService{


  isUserSignIn:boolean=false;


  constructor(private http:HttpClient){

  }
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


  signUp(){

    let body = {
      "fullName": "UJHGJGH",
      "mobileNo": "896545",
      "aadharNo": "kjhksahdfa",
      "gender": "M",
      "age": 23,
      "role": "ROLE_ADMIN",
      "userName":"uName-123",
      "password":"uName-123",
      "zone": {
        "zoneID": 1
      }
    };
    return this.http.post("/proxy/v1/user/signup",body )
  }

}
