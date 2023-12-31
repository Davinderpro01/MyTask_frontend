import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './modules/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { AppBarComponent } from './modules/app-bar/app-bar.component';
import { HomeComponent } from './modules/home/home.component';
import { AuthComponent } from './modules/auth/auth.component';
import { InicioSesionExitosoComponent } from './modules/inicio-sesion-exitoso/inicio-sesion-exitoso.component';
import { CrearTareaComponent } from './modules/crear-tarea/crear-tarea.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AppBarComponent,
    HomeComponent,
    AuthComponent,
    InicioSesionExitosoComponent,
    CrearTareaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    [FormsModule, HttpClientModule,
    NgbModule],
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[CrearTareaComponent]
})
export class AppModule { }
