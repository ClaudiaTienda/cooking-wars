import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { InicioComponent } from './inicio/inicio.component';
import { JuegoComponent } from './juego/juego.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { PuntuacionesComponent } from './puntuaciones/puntuaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuInicialComponent,
    InicioComponent,
    JuegoComponent,
    OpcionesComponent,
    PuntuacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
