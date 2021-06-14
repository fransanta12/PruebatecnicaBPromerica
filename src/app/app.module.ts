import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material/material.module';
import { EjercicioUnoComponent } from './component/ejercicio-uno/ejercicio-uno.component';

import { FormsModule } from '@angular/forms';

import { EjercicioDosComponent } from './component/ejercicio-dos/ejercicio-dos.component';
import { MenuComponent } from './component/menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    EjercicioUnoComponent,
    EjercicioDosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
 }
