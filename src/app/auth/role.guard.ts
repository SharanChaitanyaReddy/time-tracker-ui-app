import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { Injectable } from "@angular/core";
import { UnauthorizedModalComponent } from "../shared/unauthorized-modal/unauthorized-modal.component";
import { ModalService } from "../shared/modal.service";

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private modalService: ModalService  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const allowedRoles = route.data['roles'] as string[];
    const userRole = this.authService.getRole(); // e.g. 'admin', 'operations'

    if (userRole && allowedRoles.includes(userRole)) {
      return true;
    }

    this.modalService.openUnauthorizedModal();

    return false;

  }
}
