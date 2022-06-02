import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnologiaComponent } from './paginas/tecnologia/tecnologia.component';
import { HomeComponent } from './paginas/home/home.component';
import { CasualesComponent } from './paginas/casuales/casuales.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'casuales',
    component: CasualesComponent
  },
  {
    path: 'tecnologia',
    component: TecnologiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
