import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <section id="skills" class="section skills-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">03. Skills</span>
          <h2 class="section-title">Tech Stack</h2>
        </div>
        <div class="skills-grid">
          <div class="skill-group" *ngFor="let group of skillGroups">
            <h3 class="group-title">
              <mat-icon>{{ group.icon }}</mat-icon> {{ group.label }}
            </h3>
            <div class="chips-container">
              <mat-chip *ngFor="let skill of group.items" class="skill-chip">
                {{ skill }}
              </mat-chip>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section { background: #0d0d1a; }
    .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
    .skill-group {
      background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07);
      border-radius: 12px; padding: 1.5rem; transition: border-color 0.3s;
    }
    .skill-group:hover { border-color: rgba(0,229,255,0.25); }
    .group-title {
      color: #fff; font-size: 0.9rem; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.1em; display: flex; align-items: center; gap: 0.5rem;
      margin: 0 0 1.25rem;
    }
    .group-title mat-icon { color: #00e5ff; font-size: 1.1rem; }
    .chips-container { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    .skill-chip {
      background: rgba(0,229,255,0.08) !important; color: rgba(255,255,255,0.8) !important;
      border: 1px solid rgba(0,229,255,0.2) !important; font-size: 0.8rem !important;
      height: auto !important; padding: 4px 12px !important; border-radius: 4px !important;
    }
    .skill-chip:hover { background: rgba(0,229,255,0.15) !important; color: #00e5ff !important; }
  `]
})
export class SkillsComponent {
  @Input() set skills(val: any) {
    if (val) {
      this.skillGroups = [
        { label: 'Frameworks', icon: 'layers', items: val.frameworks || [] },
        { label: 'Languages', icon: 'code', items: val.languages || [] },
        { label: 'Tools & Platforms', icon: 'build', items: val.tools || [] },
        { label: 'Concepts', icon: 'lightbulb', items: val.concepts || [] }
      ];
    }
  }
  skillGroups: { label: string; icon: string; items: string[] }[] = [];
}
