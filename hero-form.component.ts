// hero-form.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  numberOfLevels: number = 0;
  submitted: boolean = false;

  submitForm() {
    this.submitted = true;
    // Add any additional logic you need for form submission
  }
}
