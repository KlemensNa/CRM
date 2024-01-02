import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  if(inject(AuthService).session){
    return true;
  } else {
    inject(Router).navigateByUrl('/');
    return false
  }
};
