import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p class="footer-name">{{ personal?.name }}</p>
          <p class="footer-copy">Designed & Built with <span>♥</span> using Angular + Material + Node.js</p>
          <p class="footer-copy">© {{ year }} All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { background: #04040e; padding: 2rem; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); }
    .footer-name { color: #00e5ff; font-weight: 700; margin: 0 0 0.5rem; font-family: 'Courier New', monospace; }
    .footer-copy { color: rgba(255,255,255,0.3); font-size: 0.85rem; margin: 0.25rem 0; }
    .footer-copy span { color: #e25555; }
  `]
})
export class FooterComponent {
  @Input() personal: any;
  year = new Date().getFullYear();
}
