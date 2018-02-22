import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandradSupplementComponent } from './pages/standrad-supplement/standrad-supplement.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StandradSupplementComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
