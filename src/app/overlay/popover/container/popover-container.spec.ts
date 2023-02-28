import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopoverContainerComponent } from './popover-container.component';
import { MatCardModule } from '@angular/material/card';

describe('PopoverContainerComponent', () => {
  let component: PopoverContainerComponent;
  let fixture: ComponentFixture<PopoverContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverContainerComponent, MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have material element renders', () => {
    const containerEl = fixture.nativeElement.querySelector(
      'mat-card, mat-card-content, ng-content'
    );
    expect(containerEl).toBeTruthy();
  });
});
