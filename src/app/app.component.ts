import { Component } from '@angular/core';
// tslint:disable-next-line:quotemark
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cooking-wars';
  router: Router;

  menu(): void {
    this.router.navigate(['/menu']);
  }
}
