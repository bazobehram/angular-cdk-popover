import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopoverService {
  private isOpen$ = new BehaviorSubject<boolean>(false);
  private isConfirmed$ = new BehaviorSubject<boolean>(false);

  onOpen(): Observable<boolean> {
    return this.isOpen$.asObservable();
  }

  setOpen(value: boolean): void {
    this.isOpen$.next(value);
  }

  onConfirmed(): Observable<boolean> {
    return this.isConfirmed$.asObservable();
  }

  setConfirmed(value: boolean): void {
    this.isConfirmed$.next(value);
  }
}
