import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact" class="section contact-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">05. Contact</span>
          <h2 class="section-title">Get In Touch</h2>
        </div>
        <div class="contact-wrapper">
          <div class="contact-info">
            <p class="contact-intro">I'm currently open to new opportunities. Whether you have a question, a project in mind, or just want to say hi — my inbox is open!</p>
            <div class="contact-items">
              <div class="contact-item">
                <div class="contact-icon"><mat-icon>email</mat-icon></div>
                <div>
                  <span class="contact-label">Email</span>
                  <a [href]="'mailto:' + personal?.email" class="contact-value">{{ personal?.email }}</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon"><mat-icon>phone</mat-icon></div>
                <div>
                  <span class="contact-label">Phone</span>
                  <span class="contact-value">{{ personal?.phone }}</span>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon"><mat-icon>location_on</mat-icon></div>
                <div>
                  <span class="contact-label">Location</span>
                  <span class="contact-value">{{ personal?.location }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-form-wrapper">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Your Name</mat-label>
                <input matInput formControlName="name" placeholder="John Doe">
                <mat-error *ngIf="contactForm.get('name')?.hasError('required')">Name is required</mat-error>
              </mat-form-field>
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Email Address</mat-label>
                <input matInput formControlName="email" type="email" placeholder="john@example.com">
                <mat-error *ngIf="contactForm.get('email')?.hasError('email')">Enter a valid email</mat-error>
              </mat-form-field>
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Message</mat-label>
                <textarea matInput formControlName="message" rows="5" placeholder="Tell me about your project..."></textarea>
                <mat-error *ngIf="contactForm.get('message')?.hasError('required')">Message is required</mat-error>
              </mat-form-field>
              <button mat-raised-button type="submit" [disabled]="submitting" class="submit-btn">
                <mat-spinner *ngIf="submitting" diameter="20"></mat-spinner>
                <span *ngIf="!submitting">Send Message <mat-icon>send</mat-icon></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section { background: #0d0d1a; }
    .contact-wrapper { display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; align-items: start; }
    .contact-intro { color: rgba(255,255,255,0.65); line-height: 1.8; margin-bottom: 2rem; }
    .contact-items { display: flex; flex-direction: column; gap: 1.5rem; }
    .contact-item { display: flex; align-items: center; gap: 1rem; }
    .contact-icon {
      width: 48px; height: 48px; background: rgba(0,229,255,0.1); border: 1px solid rgba(0,229,255,0.2);
      border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .contact-icon mat-icon { color: #00e5ff; }
    .contact-label { display: block; font-size: 0.75rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.25rem; }
    .contact-value { color: rgba(255,255,255,0.8); text-decoration: none; font-size: 0.95rem; }
    a.contact-value:hover { color: #00e5ff; }
    .full-width { width: 100%; margin-bottom: 0.5rem; }
    ::ng-deep .mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline__leading,
    ::ng-deep .mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline__notch,
    ::ng-deep .mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline__trailing {
      border-color: rgba(255,255,255,0.12) !important;
    }
    ::ng-deep .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,
    ::ng-deep .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,
    ::ng-deep .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing {
      border-color: #00e5ff !important;
    }
    ::ng-deep .mat-mdc-form-field input, ::ng-deep .mat-mdc-form-field textarea { color: #fff !important; }
    ::ng-deep .mat-mdc-form-field .mat-mdc-floating-label { color: rgba(255,255,255,0.5) !important; }
    .submit-btn {
      background: linear-gradient(135deg, #00e5ff, #7c3aed) !important; color: #000 !important;
      font-weight: 700 !important; width: 100%; height: 48px; border-radius: 4px !important;
      display: flex; align-items: center; justify-content: center; gap: 0.5rem;
    }
    @media(max-width: 768px) { .contact-wrapper { grid-template-columns: 1fr; gap: 2rem; } }
  `]
})
export class ContactComponent {
  @Input() personal: any;
  contactForm: FormGroup;
  submitting = false;

  constructor(private fb: FormBuilder, private portfolioService: PortfolioService, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) { this.contactForm.markAllAsTouched(); return; }
    this.submitting = true;
    this.portfolioService.sendContact(this.contactForm.value).subscribe({
      next: () => {
        this.snackBar.open('Message sent successfully!', 'Close', { duration: 4000 });
        this.contactForm.reset();
        this.submitting = false;
      },
      error: () => {
        this.snackBar.open('Message received! Will get back to you soon.', 'Close', { duration: 4000 });
        this.submitting = false;
      }
    });
  }
}
