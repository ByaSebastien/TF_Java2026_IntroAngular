import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Nav } from './layout/nav/nav';
import { Footer } from './layout/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Header, Nav, Footer, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TF_Java2026_IntroAngular');
}
