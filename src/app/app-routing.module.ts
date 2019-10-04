import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { InicioComponent } from './inicio/inicio.component';
import { JuegoComponent } from './juego/juego.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { PuntuacionesComponent } from './puntuaciones/puntuaciones.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'menu', component: MenuInicialComponent},
  { path: 'juego', component: JuegoComponent},
  { path: 'opciones', component: OpcionesComponent},
  { path: 'puntuaciones', component: PuntuacionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
