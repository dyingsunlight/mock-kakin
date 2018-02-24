import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRouting } from './pages/pages-routing.module';
import { url } from './config';

const routes: Routes = [
  {
    path: url.base + '',
    pathMatch: 'full',
    redirectTo: url.base + PagesRouting[0].path
  },
  {
    path: url.base + '',
    children: PagesRouting,
  },
  {
    path: '**',
    redirectTo: url.base + PagesRouting[0].path
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
