import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="section about-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">01. About</span>
          <h2 class="section-title">Who I Am</h2>
        </div>
        <div class="about-grid">
          <div class="about-text">
            <p>{{ personal?.summary }}</p>
            <p>With over <strong>12 years</strong> of frontend engineering experience, I specialize in building
               enterprise-grade applications using <strong>Angular 17</strong>, <strong>React.js</strong>, and
               <strong>TypeScript</strong>. I've led teams at companies like HCLTech, Tech Mahindra, Johnson Controls,
               and TCS, delivering high-impact digital products.</p>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Name</span>
                <span class="info-value">{{ personal?.name }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Email</span>
                <span class="info-value">{{ personal?.email }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Location</span>
                <span class="info-value">{{ personal?.location }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Phone</span>
                <span class="info-value">{{ personal?.phone }}</span>
              </div>
            </div>
          </div>
          <div class="education-card">
            <div class="card-label">Education</div>
            <div class="edu-icon"><mat-icon>school</mat-icon></div>
            <h3>{{ education?.degree }}</h3>
            <p class="edu-branch">{{ education?.branch }}</p>
            <p class="edu-college">{{ education?.college }}</p>
            <p class="edu-period">{{ education?.period }} · {{ education?.location }}</p>
            <div class="stats-row">
              <div class="stat">
                <span class="stat-num">12+</span>
                <span class="stat-label">Years Exp.</span>
              </div>
              <div class="stat">
                <span class="stat-num">4</span>
                <span class="stat-label">Companies</span>
              </div>
              <div class="stat">
                <span class="stat-num">3+</span>
                <span class="stat-label">Key Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section { background: #0d0d1a; }
    .about-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 4rem; align-items: start; }
    .about-text p { color: rgba(255,255,255,0.7); line-height: 1.8; margin-bottom: 1.5rem; }
    .about-text strong { color: #00e5ff; }
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem; }
    .info-item { display: flex; flex-direction: column; }
    .info-label { font-size: 0.75rem; color: #00e5ff; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.25rem; }
    .info-value { color: rgba(255,255,255,0.85); font-size: 0.9rem; }
    .education-card {
      background: linear-gradient(135deg, rgba(0,229,255,0.05), rgba(124,58,237,0.05));
      border: 1px solid rgba(0,229,255,0.15); border-radius: 16px; padding: 2rem;
      text-align: center;
    }
    .card-label { font-size: 0.75rem; color: #00e5ff; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 1rem; }
    .edu-icon mat-icon { font-size: 3rem; width: 3rem; height: 3rem; color: #00e5ff; margin-bottom: 1rem; }
    .education-card h3 { color: #fff; font-size: 1.2rem; margin: 0 0 0.5rem; }
    .edu-branch { color: #00e5ff; font-weight: 500; margin: 0 0 0.5rem; }
    .edu-college { color: rgba(255,255,255,0.7); font-size: 0.9rem; margin: 0 0 0.25rem; }
    .edu-period { color: rgba(255,255,255,0.4); font-size: 0.8rem; margin: 0 0 2rem; }
    .stats-row { display: flex; justify-content: space-around; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem; }
    .stat { display: flex; flex-direction: column; align-items: center; }
    .stat-num { font-size: 1.5rem; font-weight: 800; color: #00e5ff; }
    .stat-label { font-size: 0.7rem; color: rgba(255,255,255,0.4); text-transform: uppercase; }
    @media(max-width: 768px) { .about-grid { grid-template-columns: 1fr; gap: 2rem; } .info-grid { grid-template-columns: 1fr; } }
  `]
})
export class AboutComponent {
  @Input() personal: any;
  @Input() education: any;
}
