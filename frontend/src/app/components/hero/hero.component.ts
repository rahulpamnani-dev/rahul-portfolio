import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section id="hero" class="hero-section">
      <div class="hero-bg">
        <div class="grid-overlay"></div>
        <div class="glow glow-1"></div>
        <div class="glow glow-2"></div>
      </div>
      <div class="hero-content">
        <p class="greeting animate-in">Hello, I'm</p>
        <h1 class="hero-name animate-in delay-1">{{ personal?.name }}</h1>
        <h2 class="hero-title animate-in delay-2">
          <span class="typing">{{ displayText }}<span class="cursor">|</span></span>
        </h2>
        <p class="hero-location animate-in delay-3">
          <mat-icon>location_on</mat-icon> {{ personal?.location }} &nbsp;·&nbsp; 12 Years Experience
        </p>
        <div class="hero-actions animate-in delay-4">
          <button mat-raised-button (click)="scrollTo('projects')" class="btn-primary">
            View My Work <mat-icon>arrow_forward</mat-icon>
          </button>
          <button mat-stroked-button (click)="scrollTo('contact')" class="btn-outline">
            Get In Touch
          </button>
        </div>
        <div class="social-links animate-in delay-5">
          <a href="https://github.com" target="_blank" mat-icon-button matTooltip="GitHub">
            <mat-icon>code</mat-icon>
          </a>
          <a href="https://linkedin.com" target="_blank" mat-icon-button matTooltip="LinkedIn">
            <mat-icon>work</mat-icon>
          </a>
          <a href="mailto:rahultechweb@gmail.com" mat-icon-button matTooltip="Email">
            <mat-icon>email</mat-icon>
          </a>
        </div>
      </div>
      <div class="scroll-indicator" (click)="scrollTo('about')">
        <span>Scroll</span>
        <mat-icon>keyboard_arrow_down</mat-icon>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh; display: flex; align-items: center; justify-content: center;
      position: relative; overflow: hidden; background: #080815;
    }
    .hero-bg { position: absolute; inset: 0; }
    .grid-overlay {
      position: absolute; inset: 0;
      background-image: linear-gradient(rgba(0,229,255,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,229,255,0.05) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    .glow {
      position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.15;
    }
    .glow-1 { width: 500px; height: 500px; background: #00e5ff; top: -100px; right: -100px; }
    .glow-2 { width: 400px; height: 400px; background: #7c3aed; bottom: -100px; left: -100px; }
    .hero-content {
      position: relative; z-index: 1; text-align: center; padding: 2rem;
      max-width: 800px;
    }
    .greeting { color: #00e5ff; font-family: 'Courier New', monospace; font-size: 1.1rem; margin-bottom: 0.5rem; }
    .hero-name {
      font-size: clamp(2.5rem, 7vw, 5rem); font-weight: 800; color: #fff;
      margin: 0 0 0.5rem; letter-spacing: -0.02em;
      text-shadow: 0 0 40px rgba(0,229,255,0.3);
    }
    .hero-title {
      font-size: clamp(1.2rem, 3vw, 1.8rem); font-weight: 400; color: rgba(255,255,255,0.7);
      margin: 0 0 1.5rem; min-height: 2.5rem;
    }
    .cursor { animation: blink 1s step-end infinite; }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
    .hero-location { color: rgba(255,255,255,0.5); display: flex; align-items: center; justify-content: center; gap: 0.25rem; margin-bottom: 2rem; }
    .hero-location mat-icon { font-size: 1rem; color: #00e5ff; }
    .hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem; }
    .btn-primary {
      background: linear-gradient(135deg, #00e5ff, #7c3aed); color: #000 !important;
      font-weight: 700; padding: 0.5rem 1.5rem; border-radius: 4px;
    }
    .btn-outline { border-color: #00e5ff !important; color: #00e5ff !important; }
    .social-links { display: flex; gap: 0.5rem; justify-content: center; }
    .social-links a { color: rgba(255,255,255,0.6) !important; }
    .social-links a:hover { color: #00e5ff !important; }
    .scroll-indicator {
      position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
      display: flex; flex-direction: column; align-items: center; color: rgba(255,255,255,0.4);
      cursor: pointer; animation: bounce 2s infinite; font-size: 0.75rem; text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(8px); } }
    .animate-in { animation: fadeUp 0.8s ease forwards; opacity: 0; }
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    .delay-4 { animation-delay: 0.4s; }
    .delay-5 { animation-delay: 0.5s; }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  @Input() personal: any;
  displayText = '';
  private titles = ['Lead Frontend Engineer', 'Angular Expert', 'React Developer', 'Micro-frontend Architect'];
  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: any;

  ngOnInit() { this.typeWriter(); }
  ngOnDestroy() { clearTimeout(this.timer); }

  typeWriter() {
    const current = this.titles[this.titleIndex];
    if (this.isDeleting) {
      this.displayText = current.substring(0, --this.charIndex);
    } else {
      this.displayText = current.substring(0, ++this.charIndex);
    }
    let speed = this.isDeleting ? 50 : 100;
    if (!this.isDeleting && this.charIndex === current.length) {
      speed = 2000; this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      speed = 300;
    }
    this.timer = setTimeout(() => this.typeWriter(), speed);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
