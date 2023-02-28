import { Component } from '@angular/core';
import { PopoverContainerComponent } from '../container/popover-container.component';
import { PopoverDirective } from '../directives/popover.directive';
import { PopoverService } from '../services/popover/popover.service';
import { MatButtonModule } from '@angular/material/button';
import { Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'popover',
  standalone: true,
  imports: [
    PopoverContainerComponent,
    PopoverDirective,
    MatButtonModule,
    NgIf,
    MatCardModule,
  ],
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {
  @Input() isConfirm: boolean = false;
  @Input() closeOnClickOutside: boolean = false;
  text: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at mattis quam, quis venenatis diam.';
  cButton: boolean = true;
  constructor(private popoverService: PopoverService) {
    this.popoverService.onConfirmed().subscribe((confirm: boolean) => {
      this.isConfirm = confirm;
    });
  }
}
