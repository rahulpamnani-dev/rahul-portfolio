import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  template: `
    <section id="experience" class="section experience-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">02. Experience</span>
          <h2 class="section-title">Work History</h2>
        </div>
        <div class="timeline">
          <div class="timeline-item" *ngFor="let exp of experience; let i = index">
            <div class="timeline-dot"></div>
            <div class="timeline-line" *ngIf="i < experience.length - 1"></div>
            <mat-card class="exp-card">
              <mat-card-content>
                <div class="exp-header">
                  <div>
                    <h3 class="exp-role">{{ exp.role }}</h3>
                    <p class="exp-company">{{ exp.company }}</p>
                  </div>
                  <div class="exp-meta">
                    <span class="exp-period">{{ exp.period }}</span>
                    <span class="exp-location"><mat-icon>location_on</mat-icon>{{ exp.location }}</span>
                  </div>
                </div>
                <mat-divider></mat-divider>
                <ul class="highlights">
                  <li *ngFor="let h of exp.highlights">
                    <mat-icon class="bullet-icon">chevron_right</mat-icon>
                    <span>{{ h }}</span>
                  </li>
                </ul>
              </mat-card-content>
            </mat-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-section { background: #080815; }
    .timeline { position: relative; max-width: 900px; margin: 0 auto; }
    .timeline-item { display: flex; gap: 2rem; position: relative; margin-bottom: 2.5rem; }
    .timeline-dot {
      width: 16px; height: 16px; background: #00e5ff; border-radius: 50%; flex-shrink: 0;
      margin-top: 1.5rem; box-shadow: 0 0 12px rgba(0,229,255,0.6); position: relative; z-index: 1;
    }
    .timeline-line {
      position: absolute; left: 7px; top: 3rem; bottom: -2.5rem;
      width: 2px; background: linear-gradient(to bottom, rgba(0,229,255,0.4), transparent);
    }
    .exp-card {
      flex: 1; background: rgba(255,255,255,0.03) !important;
      border: 1px solid rgba(255,255,255,0.08) !important; border-radius: 12px !important;
      transition: border-color 0.3s, transform 0.3s;
    }
    .exp-card:hover { border-color: rgba(0,229,255,0.3) !important; transform: translateX(4px); }
    .exp-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem; }
    .exp-role { color: #fff; font-size: 1.2rem; font-weight: 600; margin: 0 0 0.25rem; }
    .exp-company { color: #00e5ff; font-size: 1rem; margin: 0; font-weight: 500; }
    .exp-meta { text-align: right; display: flex; flex-direction: column; gap: 0.25rem; }
    .exp-period { color: rgba(255,255,255,0.5); font-size: 0.85rem; font-family: 'Courier New', monospace; }
    .exp-location { color: rgba(255,255,255,0.4); font-size: 0.8rem; display: flex; align-items: center; justify-content: flex-end; }
    .exp-location mat-icon { font-size: 0.85rem; width: 0.85rem; height: 0.85rem; }
    mat-divider { border-color: rgba(255,255,255,0.06) !important; margin: 1rem 0 !important; }
    .highlights { list-style: none; padding: 0; margin: 0; }
    .highlights li { display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem; color: rgba(255,255,255,0.65); font-size: 0.9rem; line-height: 1.6; }
    .bullet-icon { color: #00e5ff; font-size: 1rem !important; width: 1rem !important; height: 1rem !important; flex-shrink: 0; margin-top: 3px; }
    @media(max-width: 600px) { .exp-header { flex-direction: column; } .exp-meta { text-align: left; } }
  `]
})
export class ExperienceComponent {
  @Input() experience: any[] = [];
}
