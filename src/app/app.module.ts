import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    InscriptionComponent,
    DashbordComponent,
    StatistiquesComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
