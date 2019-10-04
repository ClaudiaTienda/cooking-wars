import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css']
})
export class MenuInicialComponent implements OnInit {

  router: Router;
  constructor() { }

  ngOnInit() {
  }

  menu(): void {
    this.router.navigate(['/opciones']);
  }
  puntuaciones(): void {
    this.router.navigate(['/puntuaciones']);
  }
  inicio(): void {
    this.router.navigate(['/inicio']);
  }
}
