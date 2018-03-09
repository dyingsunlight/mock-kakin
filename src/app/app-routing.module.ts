import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRouting } from './pages/pages-routing.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PagesRouting[0].component
  },
  ...PagesRouting,
  {
    path: '**',
    redirectTo: PagesRouting[0].path
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
