import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { FormCanDeactivate } from './form-candeactivate';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<FormCanDeactivate> {

  canDeactivate(
    component: FormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return component.podeDesativar();
  }
}
