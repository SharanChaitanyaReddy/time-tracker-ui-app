import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { UnauthorizedModalComponent } from './unauthorized-modal/unauthorized-modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  openUnauthorizedModal() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(UnauthorizedModalComponent);
    const componentRef = componentFactory.create(this.injector);

    componentRef.instance.closed.subscribe(() => {
      this.appRef.detachView(componentRef.hostView);
      const el = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
      document.body.removeChild(el);
    });

    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }
}

