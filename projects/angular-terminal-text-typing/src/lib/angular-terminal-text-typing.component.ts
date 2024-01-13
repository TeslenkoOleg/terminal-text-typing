import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'terminal-text-typing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-terminal-text-typing.component.html',
  styleUrls: ['./angular-terminal-text-typing.component.scss']
})
export class AngularTerminalTextTypingComponent implements OnInit{
  @Input() text!: string;
  currentText = '';
  @Input() public speed: number = 55; // Adjust the typing speed (milliseconds)
  private lineBreakDelay: number = 500; // Adjust the delay between line breaks (milliseconds)
  public terminalCursorClass = 'terminal-cursor';
  @Output() public onTypingEnd: EventEmitter<boolean> = new EventEmitter<boolean>();
  async ngOnInit(){
    await this.typeText();
  }
  async typeText() {
    for (let i = 0; i < this.text.length; i++) {
      this.currentText += this.text[i];
      if (this.text[i] === '\n') {
        await this.timeout(this.lineBreakDelay);
      }
      await this.timeout(this.speed);
    }
    this.terminalCursorClass = '';
    this.onTypingEnd.emit(true);

  }
  async timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
