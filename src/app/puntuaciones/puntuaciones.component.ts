import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-puntuaciones',
  templateUrl: './puntuaciones.component.html',
  styleUrls: ['./puntuaciones.component.css']
})
export class PuntuacionesComponent implements OnInit {

  router: Router;
  constructor() { }

  ngOnInit() {
  }

  inicio(): void {
    this.router.navigate(['/inicio']);
  }
}
