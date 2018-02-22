import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandradSupplementComponent } from './pages/standrad-supplement/standrad-supplement.component';
import { url } from './config';

const routes: Routes = [
  {
    path: url.base + '',
    component: StandradSupplementComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
