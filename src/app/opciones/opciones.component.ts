import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit {
  router: Router;
  constructor() { }

  ngOnInit() {
  }

  inicio(): void {
    this.router.navigate(['/inicio']);
  }
}
