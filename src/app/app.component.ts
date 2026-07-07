import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Portfolio';

  constructor(private router: Router) {}

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    if (this.router.url !== '/dashboard') {
      this.router.navigate(['/dashboard']).then(() => {
        this.scrollToSectionId(sectionId);
      });
      return;
    }

    this.scrollToSectionId(sectionId);
  }

  private scrollToSectionId(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
