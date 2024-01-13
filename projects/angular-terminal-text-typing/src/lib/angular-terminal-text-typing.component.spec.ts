import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTerminalTextTypingComponent } from './angular-terminal-text-typing.component';

describe('TypeEffectComponent', () => {
  let component: AngularTerminalTextTypingComponent;
  let fixture: ComponentFixture<AngularTerminalTextTypingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AngularTerminalTextTypingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTerminalTextTypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
