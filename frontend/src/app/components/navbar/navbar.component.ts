import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar [class.scrolled]="isScrolled" class="navbar">
      <span class="logo">{{ personal?.name?.split(' ')[0] }}<span class="accent">.</span></span>
      <span class="spacer"></span>
      <nav class="desktop-nav">
        <a mat-button (click)="scrollTo('about')">About</a>
        <a mat-button (click)="scrollTo('experience')">Experience</a>
        <a mat-button (click)="scrollTo('skills')">Skills</a>
        <a mat-button (click)="scrollTo('projects')">Projects</a>
        <a mat-button (click)="scrollTo('contact')">Contact</a>
      </nav>
      <button mat-icon-button class="menu-btn" [matMenuTriggerFor]="mobileMenu">
        <mat-icon>menu</mat-icon>
      </button>
      <mat-menu #mobileMenu="matMenu">
        <button mat-menu-item (click)="scrollTo('about')">About</button>
        <button mat-menu-item (click)="scrollTo('experience')">Experience</button>
        <button mat-menu-item (click)="scrollTo('skills')">Skills</button>
        <button mat-menu-item (click)="scrollTo('projects')">Projects</button>
        <button mat-menu-item (click)="scrollTo('contact')">Contact</button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [`
    .navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      background: transparent; transition: all 0.3s ease;
      padding: 0 2rem;
    }
    .navbar.scrolled {
      background: rgba(10, 10, 20, 0.95) !important;
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .logo { font-family: 'Courier New', monospace; font-size: 1.5rem; font-weight: 700; color: #fff; }
    .accent { color: #00e5ff; }
    .spacer { flex: 1; }
    .desktop-nav a { color: rgba(255,255,255,0.85); font-size: 0.9rem; letter-spacing: 0.05em; text-transform: uppercase; }
    .desktop-nav a:hover { color: #00e5ff; }
    .menu-btn { display: none; color: white; }
    @media(max-width: 768px) {
      .desktop-nav { display: none; }
      .menu-btn { display: inline-flex; }
    }
  `]
})
export class NavbarComponent {
  @Input() personal: any;
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll() { this.isScrolled = window.scrollY > 50; }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
