import { TestBed } from '@angular/core/testing';
import { RoleGuard } from './role.guard';
import { AuthService } from './services/auth.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { ModalService } from '../shared/modal.service';

describe('RoleGuard', () => {
  let guard: RoleGuard;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let modalServiceSpy: jasmine.SpyObj<ModalService>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['getRole']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    modalServiceSpy = jasmine.createSpyObj('ModalService', ['openUnauthorizedModal']);

    TestBed.configureTestingModule({
      providers: [
        RoleGuard,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ModalService, useValue: modalServiceSpy },
      ],
    });

    guard = TestBed.inject(RoleGuard);
  });

  function createRouteSnapshot(roles: string[]): ActivatedRouteSnapshot {
    const snapshot = new ActivatedRouteSnapshot();
    (snapshot as any).data = { roles };
    return snapshot;
  }

  it('should allow access if user role is in allowed roles', () => {
    authServiceSpy.getRole.and.returnValue('admin');
    const route = createRouteSnapshot(['admin', 'manager']);

    const result = guard.canActivate(route);

    expect(result).toBeTrue();
    expect(modalServiceSpy.openUnauthorizedModal).not.toHaveBeenCalled();
  });

  it('should block access and open modal if user role is not in allowed roles', () => {
    authServiceSpy.getRole.and.returnValue('user');
    const route = createRouteSnapshot(['admin', 'manager']);
  });
});
