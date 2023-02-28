import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'popover',
    loadComponent: () =>
      import('./overlay/popover/popover/popover.component').then(
        (m) => m.PopoverComponent
      ),
  },
];
