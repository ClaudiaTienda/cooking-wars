import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { InicioComponent } from './inicio/inicio.component';
import { JuegoComponent } from './juego/juego.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'menu', component: MenuInicialComponent},
  { path: 'juego', component: JuegoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
