<h2 align="center">About</h2>

A terminal text typing component for angular 17.0+ that can display entering letters like in terminal.
The source code is open and can be found on [GitHub](https://github.com/TeslenkoOleg/terminal-text-typing/blob/main/projects/angular-terminal-text-typing/).

<h2 align="center">Demo</h2>

<div align="center">

https://oleh.t-slen.com

</div>

<h2 align="center">Getting started</h2>

### Setup

```bash
npm i angular-terminal-text-typing
```

### Import the AngularTerminalTextTypingComponent into your application:

```typescript
import { Component } from '@angular/core';
import {AngularTerminalTextTypingComponent} from "angular-terminal-text-typing";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularTerminalTextTypingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
```
### Add selector to HTML template:

```html
<terminal-text-typing [text]="'SUPER AWESOME TEXT'" [speed]="1000" />
```

### Input parameters:

<p>text: string - text to display</p>
<p>speed: number - speed of typing in ms</p>

### What major versions of angular does this library support?

| Angular version | Library version |
|-----------------|-----------------|
| 17.x and higher | latest          |
