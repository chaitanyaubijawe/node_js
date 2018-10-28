import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {Injectable} from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authService.isUSerSignedIn();
  }


}
