import { TestBed } from '@angular/core/testing';
import { PopoverService } from './popover.service';

describe('PopoverService', () => {
  let service: PopoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopoverService],
    });
    service = TestBed.inject(PopoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open and close popover', () => {
    service.setOpen(false);
    service.onOpen().subscribe((onOpen) => {
      expect(onOpen).toBe(false);
    });

    service.setOpen(true);
    service.onOpen().subscribe((onOpen) => {
      expect(onOpen).toBe(true);
    });

    service.setOpen(false);
    service.onConfirmed().subscribe((onConfirmed) => {
      expect(onConfirmed).toBe(false);
    });

    service.setConfirmed(true);
    service.onConfirmed().subscribe((onConfirmed) => {
      expect(onConfirmed).toBe(true);
    });
  });
});
