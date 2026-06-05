import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Personal {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  socialLinks: { github: string; linkedin: string };
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Skills {
  frameworks: string[];
  languages: string[];
  tools: string[];
  concepts: string[];
}

export interface Project {
  id: number;
  name: string;
  company: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface Education {
  degree: string;
  branch: string;
  college: string;
  period: string;
  location: string;
}

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getPortfolio(): Observable<any> {
    return this.http.get(`${this.apiUrl}/portfolio`).pipe(
      catchError(() => of(this.getFallbackData()))
    );
  }

  sendContact(data: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, data);
  }

  private getFallbackData() {
    return {
      personal: {
        name: 'Rahul Pamnani',
        title: 'Lead Frontend Engineer',
        email: 'rahultechweb@gmail.com',
        phone: '+917042153624',
        location: 'Noida, India',
        summary: 'Experienced Frontend Lead with 12 years of expertise in Angular, React.js, TypeScript, and modern UI frameworks.',
        socialLinks: { github: 'https://github.com', linkedin: 'https://linkedin.com' }
      }
    };
  }
}
