import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRouting } from './pages/pages-routing.module';
import { LoadConfigService } from './core/service/load-config.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PagesRouting[0].component
  },
  {
    path: '',
    // 由于界面中涉及配置数据，因此强制要求读取配置后才可以加载界面
    canActivate: [LoadConfigService],
    children: PagesRouting
  },
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
