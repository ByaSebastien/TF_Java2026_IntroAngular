import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Nav } from './layout/nav/nav';

@Component({
  imports: [Header, Nav],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TF_Java2026_IntroAngular');
}
