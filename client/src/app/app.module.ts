import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlatoListComponent } from './components/plato-list/plato-list.component';
import { PlatoFormComponent } from './components/plato-form/plato-form.component';
import { FormsModule } from '@angular/forms';
import { MesaListComponent } from './components/mesa-list/mesa-list.component';
import { MesaFormComponent } from './components/mesa-form/mesa-form.component';
import { HomeComponent } from './components/home/home.component';
import { SupervisorMenuComponent } from './components/supervisor-menu/supervisor-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlatoListComponent,
    PlatoFormComponent,
    MesaListComponent,
    MesaFormComponent,
    HomeComponent,
    SupervisorMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
