import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  ElementRef,
  HostListener,
} from '@angular/core';
import { Overlay, OverlayRef, ConnectedPosition } from '@angular/cdk/overlay';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ComponentPortal } from '@angular/cdk/portal';
import { PopoverService } from '../services/popover/popover.service';
import { PopoverContainerComponent } from '../container/popover-container.component';

@Directive({
  selector: '[popoverTemplate]',
  standalone: true,
})
export class PopoverDirective implements OnDestroy, OnInit {
  @HostListener('click')
  onClick() {
    this.popoverService.setOpen(true);
  }
  @Input() text!: string;
  @Input() cButton: boolean = false;
  @Input() closeOnClickOutside: boolean = false;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private overlayRef!: OverlayRef;
  readonly positions: ConnectedPosition[] = [
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
    },
    {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
    },
  ];

  constructor(
    private elementRef: ElementRef,
    private overlay: Overlay,
    private popoverService: PopoverService
  ) {}

  ngOnInit(): void {
    this.createOverlay();
    this.popoverService.onConfirmed().subscribe((confirm: boolean) => {
      if (confirm) {
        this.detachOverlay();
      }
    });

    this.popoverService.onOpen().subscribe((res: boolean) => {
      if (res) {
        this.attachOverlay();
      }
    });
  }

  ngOnDestroy(): void {
    this.detachOverlay();
  }

  private createOverlay(): void {
    const scrollStrategy = this.overlay.scrollStrategies.block();
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions(this.positions);

    this.overlayRef = this.overlay.create({
      scrollStrategy,
      positionStrategy,
      hasBackdrop: true,
      backdropClass: '',
    });

    this.overlayRef
      .backdropClick()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.closeOnClickOutside) {
          this.detachOverlay();
        }
      });
  }

  attachOverlay(): void {
    if (!this.overlayRef.hasAttached()) {
      const textPortal = new ComponentPortal(PopoverContainerComponent);
      const componentRef = this.overlayRef.attach(textPortal);
      componentRef.instance.text = this.text;
      componentRef.instance.cButton = this.cButton;
    }
  }

  detachOverlay(): void {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }
}
