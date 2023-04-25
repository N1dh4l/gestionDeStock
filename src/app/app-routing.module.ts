import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';

const routes: Routes = [
  { path:'login',component:PageLoginComponent },
  { path:'inscrire',component:InscriptionComponent },
  { path:'',component:DashbordComponent,
      children:[
          { path:'statistiques', component:StatistiquesComponent}
      ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
