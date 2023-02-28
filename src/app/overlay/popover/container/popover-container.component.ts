import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PopoverService } from '../services/popover/popover.service';

@Component({
  selector: 'popover-container',
  templateUrl: './popover-container.component.html',
  styleUrls: ['./popover-container.component.scss'],
  standalone: true,
  imports: [OverlayModule, MatCardModule, MatButtonModule, NgIf],
})
export class PopoverContainerComponent {
  @Input() text!: string;
  @Input() cButton: boolean = false;
  constructor(private popoverService: PopoverService) {}

  confirm() {
    this.popoverService.setConfirmed(true);
  }
}
