import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{

  constructor(private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log("Inside can activate:: ");
    // here i wanted to check user is authorized to go to particular route...
    // auth api...... http.post("/auth") : send user info to API
    //OR
    // JWT token: 1231231321.1231241243141.asdfasfdafdsf
    // they will send this token to API.....http.get(/auth?token=)
    let authorize = true;
    if(authorize){
      return authorize;
    }else{
      this.router.navigateByUrl("/contact");
    }
    return false;
  }

}
