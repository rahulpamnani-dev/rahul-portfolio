import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar [personal]="portfolio?.personal"></app-navbar>
    <main>
      <app-hero [personal]="portfolio?.personal"></app-hero>
      <app-about [personal]="portfolio?.personal" [education]="portfolio?.education"></app-about>
      <app-experience [experience]="portfolio?.experience"></app-experience>
      <app-skills [skills]="portfolio?.skills"></app-skills>
      <app-projects [projects]="portfolio?.projects"></app-projects>
      <app-contact [personal]="portfolio?.personal"></app-contact>
    </main>
    <app-footer [personal]="portfolio?.personal"></app-footer>
  `
})
export class AppComponent implements OnInit {
  portfolio: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getPortfolio().subscribe(data => {
      this.portfolio = data;
    });
  }
}
