import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    // if(admin){
    //   return true;
    // }else if(seller){
    //   return  true
    // }

    let loggedIn = localStorage.getItem('loggedIn');

    if(loggedIn === 'true'){

      return true;
    }

    return false;
  }

}
