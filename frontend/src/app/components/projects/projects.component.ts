import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <section id="projects" class="section projects-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">04. Projects</span>
          <h2 class="section-title">Featured Work</h2>
        </div>
        <div class="projects-grid">
          <mat-card class="project-card" *ngFor="let project of projects; let i = index">
            <mat-card-content>
              <div class="project-number">0{{ i + 1 }}</div>
              <h3 class="project-name">{{ project.name }}</h3>
              <p class="project-company">{{ project.company }}</p>
              <p class="project-desc">{{ project.description }}</p>
              <ul class="project-highlights">
                <li *ngFor="let h of project.highlights">
                  <mat-icon>check_circle</mat-icon>{{ h }}
                </li>
              </ul>
              <div class="project-tags">
                <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section { background: #080815; }
    .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
    .project-card {
      background: rgba(255,255,255,0.02) !important; border: 1px solid rgba(255,255,255,0.07) !important;
      border-radius: 16px !important; transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
      position: relative; overflow: hidden;
    }
    .project-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(90deg, #00e5ff, #7c3aed); transform: scaleX(0);
      transition: transform 0.3s; transform-origin: left;
    }
    .project-card:hover { transform: translateY(-6px); border-color: rgba(0,229,255,0.2) !important; box-shadow: 0 20px 40px rgba(0,0,0,0.4) !important; }
    .project-card:hover::before { transform: scaleX(1); }
    .project-number { font-size: 3rem; font-weight: 900; color: rgba(0,229,255,0.08); font-family: 'Courier New', monospace; margin-bottom: 0.5rem; }
    .project-name { color: #fff; font-size: 1.2rem; font-weight: 700; margin: 0 0 0.25rem; }
    .project-company { color: #00e5ff; font-size: 0.85rem; margin: 0 0 1rem; }
    .project-desc { color: rgba(255,255,255,0.6); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem; }
    .project-highlights { list-style: none; padding: 0; margin: 0 0 1.5rem; }
    .project-highlights li { display: flex; align-items: flex-start; gap: 0.5rem; color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-bottom: 0.4rem; }
    .project-highlights mat-icon { color: #00e5ff; font-size: 0.9rem !important; width: 0.9rem !important; height: 0.9rem !important; flex-shrink: 0; margin-top: 2px; }
    .project-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
    .tag {
      background: rgba(124,58,237,0.15); border: 1px solid rgba(124,58,237,0.3);
      color: rgba(255,255,255,0.7); font-size: 0.75rem; padding: 2px 10px; border-radius: 3px;
    }
  `]
})
export class ProjectsComponent {
  @Input() projects: any[] = [];
}
